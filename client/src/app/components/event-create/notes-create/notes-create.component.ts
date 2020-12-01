import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { DBNote } from '../../../../../../shared-models/db/note.model';
import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { merge } from 'rxjs';

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
            this.notePinnedFormControls = [];
        }
    }
    @Output() doneSaving: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() noteValidity: EventEmitter<boolean> = new EventEmitter<boolean>();
    public noteIDs: number[] = [];
    public notesFormControls: FormControl[] = [];
    public noteDateFormControls: FormControl[] = [];
    public notePinnedFormControls: FormControl[] = [];

    constructor(
        private eventSchedulerService: EventSchedulerService,
    ) { }

    public ngOnInit(): void {
        if (this.eventID) {
            this.eventSchedulerService.getNotesForEventID(this.eventID).subscribe(notes => {
                this.noteIDs = notes.map(note => note.id);
                this.notesFormControls = notes.map(note => new FormControl(note.description, [Validators.required]));
                this.noteDateFormControls = notes.map(note => new FormControl(`${note.date}T00:00:00`, [Validators.required]));
                this.notePinnedFormControls = notes.map(note => new FormControl(note.pinned, [Validators.required]));
                this.btnAddNote();
            });
        } else {
            this.btnAddNote();
        }
    }

    private setValidity(): void {
        const notes = this.noteIDs.map((_, i) => ({
            date: this.noteDateFormControls[i].value,
            description: this.notesFormControls[i].value,
        } as DBNote)).filter(x => x.description.split(' ').filter(v => v).length > 0);
        this.noteValidity.next(notes.filter(x => !x.date).length === 0)
    }

    private addListeners(): void {
        this.notesFormControls.forEach(x => {
            x.valueChanges.subscribe(() => this.setValidity());
        });
        this.noteDateFormControls.forEach(x => {
            x.valueChanges.subscribe(() => this.setValidity());
        });
    }

    private saveNotes(eventID: number): void {
        const notes = this.noteIDs.map((noteID, i) => ({
            eventID,
            date: this.noteDateFormControls[i].value,
            description: this.notesFormControls[i].value,
            id: noteID,
            userID: null,
            pinned: this.notePinnedFormControls[i].value,
        } as DBNote)).filter(x => x.description.split(' ').filter(v => v).length > 0);
        if (notes.filter(x => !x.date).length > 0) {
            alert('Date must be entered for every note');
        } else {
            if (notes.length) {
                merge(
                    ...notes.map(note => {
                        return (this.isEditMode && note.id
                            ? this.eventSchedulerService.putNoteUpdate(note)
                            : this.eventSchedulerService.postNoteCreate(note)
                        );
                    })
                ).subscribe(resp => this.doneSaving.next(resp));
            } else {
                this.doneSaving.next(true);
            }
        }
    }

    public btnAddNote(): void {
        this.noteIDs = [null].concat(this.noteIDs);
        this.notesFormControls = [new FormControl('', [Validators.required])].concat(this.notesFormControls);
        this.noteDateFormControls = [new FormControl('', [Validators.required])].concat(this.noteDateFormControls);
        this.notePinnedFormControls = [new FormControl(false, [Validators.required])].concat(this.notePinnedFormControls);
        this.addListeners();
    }

    public btnDeleteNote(index: number): void {
        const noteID = this.noteIDs[index];
        const removeIndex = (arr, idx) => arr.filter((_, i) => i !== idx);
        this.noteIDs = removeIndex(this.noteIDs, index);
        this.notesFormControls = removeIndex(this.notesFormControls, index);
        this.noteDateFormControls = removeIndex(this.noteDateFormControls, index);
        this.notePinnedFormControls = removeIndex(this.notePinnedFormControls, index);
        if (noteID) {
            this.eventSchedulerService.deleteNote(noteID).subscribe(resp => console.log(resp));
        }
    }

}
