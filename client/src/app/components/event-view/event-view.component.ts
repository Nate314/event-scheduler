import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

    @Input() eventID: DBEvent;
    eventInformation: DBEvent;
    isEditMode: boolean;

    constructor(
        private eventSchedulerService: EventSchedulerService
    ) { }

    public ngOnInit(): void {
    }

    public btnExpand(): void {
        console.log('button expand');
        this.eventSchedulerService.getEvent(this.eventID.id).subscribe(resp => {
            this.eventInformation = resp;
            console.log(resp);
        });
    }

    public btnDelete(): void {
        this.eventSchedulerService.deleteEvent(this.eventID.id).subscribe(resp => {
            console.log(resp);
        });
    }
}
