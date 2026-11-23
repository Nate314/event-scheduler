import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    public pastEvents: { events: DBEvent[], label: string };
    public todayEvents: { events: DBEvent[], label: string };
    public futureEvents: { events: DBEvent[], label: string };
    public greeting: string = (() => {
        const hour = moment().hours();
        return `Good ${
            hour < 12 ? 'morning'
            : hour < 18 ? 'afternoon'
            : 'evening'}`;
    })();
    public username: string = (() => {
        return this.utilityService.getToken().username;
    })();
    public about: any;

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
    ) {
    }

    public ngOnInit(): void {
        this.eventSchedulerService.getApiInformation().subscribe(x => this.about = x);
        this.eventSchedulerService.getEventIDs().subscribe(resp => {
            const today = this.utilityService.formatMomentToString(null).split(' ')[0];
            const filterOnToday = (f: (date: string, t: string) => boolean): DBEvent[] =>
                resp.filter(x => f(x.date.split(' ')[0], today));
            this.pastEvents = { events: filterOnToday((date, t) => date < t), label: 'past' };
            this.todayEvents = { events: filterOnToday((date, t) => date === t), label: 'today' };
            this.futureEvents = { events: filterOnToday((date, t) => date > t).reverse(), label: 'future' };
        });
    }

}
