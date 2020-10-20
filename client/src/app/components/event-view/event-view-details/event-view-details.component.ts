import { DBEvent } from '../../../../../../shared-models/db/event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-view-details',
    templateUrl: './event-view-details.component.html',
    styleUrls: ['./event-view-details.component.scss']
})
export class EventViewDetailsComponent implements OnInit {

    @Input() eventInformation: DBEvent;

    constructor(
    ) { }

    public ngOnInit(): void {
    }
}
