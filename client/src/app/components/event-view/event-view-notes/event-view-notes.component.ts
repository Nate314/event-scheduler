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
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.eventSchedulerService.getNotesForEventID(this.eventID).subscribe(resp => {
            console.log('----');
            console.log(resp);
            console.log('----');
            this.notes = resp.map((x, i) => {
                x.date = this.utilityService.formatDateToString(new Date(x.date));
                if (x.date === this.utilityService.formatDateToString(new Date())) {
                    x['pinned'] = true;
                }
                return x;
            });
            this.notes = this.notes.filter(x => x['pinned']).concat(this.notes.filter(x => !x['pinned']));
            console.log(this.notes);
        });
    }
}
