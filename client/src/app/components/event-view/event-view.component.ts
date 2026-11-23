import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'app-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

    @Input() eventID: DBEvent;
    eventInformation: DBEvent;
    displayedTitle: string;
    displayedDate: string;
    isEditMode: boolean;

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.displayedTitle = this.eventID.title;
        this.displayedDate = this.utilityService.formatMomentToString(
            moment(this.eventID.date),
            this.eventID.time);
    }

    public btnExpand(): void {
        this.eventSchedulerService.getEvent(this.eventID.id)
            .subscribe(resp => {
                resp.num = this.eventID.num;
                this.eventInformation = resp;
            });
    }

    public btnDelete(): void {
        this.eventSchedulerService.deleteEvent(this.eventID.id)
            .subscribe(resp => console.log(resp));
    }
}
