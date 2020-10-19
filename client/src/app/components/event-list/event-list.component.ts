import { EventInformation } from '../../../../../shared-models/event/event-information.model';
import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

    eventIDs: EventInformation[];

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
