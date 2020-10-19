import { EventInformation } from '../../../../../shared-models/event/event-information.model';
import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

    @Input() eventID: EventInformation;
    eventInformation: EventInformation;
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

    public btnEdit(): void {
        this.isEditMode = !this.isEditMode;
    }

    public btnDelete(): void {
        this.eventSchedulerService.deleteEvent(this.eventID.id).subscribe(resp => {
            console.log(resp);
        });
    }
}
