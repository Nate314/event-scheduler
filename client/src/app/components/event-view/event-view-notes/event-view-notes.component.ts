import { EventSchedulerService, UtilityService } from 'src/app/services';
import { DBNote } from '../../../../../../shared-models/db/note.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-view-notes',
    templateUrl: './event-view-notes.component.html',
    styleUrls: ['./event-view-notes.component.scss']
})
export class EventViewNotesComponent implements OnInit {

    @Input() eventID: number;
    public notes: DBNote[];

    constructor(
        private eventSchedulerService: EventSchedulerService,
    ) { }

    public ngOnInit(): void {
        this.eventSchedulerService.getNotesForEventID(this.eventID).subscribe(resp => {
            this.notes = resp;
            this.notes = this.notes.filter(x => x.pinned).concat(this.notes.filter(x => !x.pinned));
        });
    }
}
