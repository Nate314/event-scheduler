import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { DBNote } from '../../../../../../shared-models/db/note.model';
import { FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-notes-create',
    templateUrl: './notes-create.component.html',
    styleUrls: ['./notes-create.component.scss']
})
export class NotesCreateComponent implements OnInit {

    @Input() isEditMode: boolean;
    @Input() eventID: number;
    @Input()
    set savingEventID(value: number) {
        if (value) {
            this.saveNotes(value);
        }
    }
    @Input()
    set isFormVisible(value: boolean) {
        if (value === false) {
            this.noteIDs = [];
            this.notesFormControls = [];
            this.noteDateFormControls = [];
        }
    }
    public noteIDs: number[] = [];
    public notesFormControls: FormControl[] = [];
    public noteDateFormControls: FormControl[] = [];

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        if (this.eventID) {
            const observable = this.eventSchedulerService.getNotesForEventID(this.eventID).subscribe(notes => {
                this.noteIDs = notes.map(note => note.id);
                this.notesFormControls = notes.map(note => new FormControl(note.description, [Validators.required]));
                this.noteDateFormControls = notes.map(note => new FormControl(note.date, [Validators.required]));
                observable.unsubscribe();
            });
        }
    }

    private saveNotes(eventID: number): void {
        const notes = this.noteIDs.map((noteID, i) => ({
            eventID,
            date: this.utilityService.formatDateToString(new Date(this.noteDateFormControls[i].value)),
            description: this.notesFormControls[i].value,
            id: noteID,
            userID: null,
        } as DBNote));
        notes.forEach(note => {
            (this.isEditMode && note.id
                ? this.eventSchedulerService.putNoteUpdate(note)
                : this.eventSchedulerService.postNoteCreate(note)
            ).subscribe(r => console.log(r));
        });
    }

    public btnAddNote(): void {
        this.noteIDs = [null].concat(this.noteIDs);
        this.notesFormControls = [new FormControl('', [Validators.required])].concat(this.notesFormControls);
        this.noteDateFormControls = [new FormControl('', [Validators.required])].concat(this.noteDateFormControls);
    }

    public btnDeleteNote(index: number): void {
        const removeIndex = (arr, idx) => arr.filter((_, i) => i !== idx);
        this.noteIDs = removeIndex(this.noteIDs, index);
        this.notesFormControls = removeIndex(this.notesFormControls, index);
        this.noteDateFormControls = removeIndex(this.noteDateFormControls, index);
    }

}
