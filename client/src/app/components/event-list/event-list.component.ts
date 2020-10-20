import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

    eventIDs: DBEvent[];

    constructor(
        private eventSchedulerService: EventSchedulerService,
    ) { }

    public ngOnInit(): void {
        this.eventSchedulerService.getEventIDs().subscribe(resp => {
            this.eventIDs = resp;
            console.log(resp);
        });
    }
}
