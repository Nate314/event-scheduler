import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    public pastEvents: { events: DBEvent[] };
    public todayEvents: { events: DBEvent[] };
    public futureEvents: { events: DBEvent[] };
    public greeting: string = (() => {
        const hour = new Date().getHours();
        return `Good ${
            hour < 12 ? 'morning'
            : hour < 6 ? 'afternoon'
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
            const today = this.utilityService.formatDateToString(new Date());
            this.pastEvents = { events: resp.filter(x => this.utilityService.formatDateToString(new Date(x.date)) < today) };
            this.todayEvents = { events: resp.filter(x => this.utilityService.formatDateToString(new Date(x.date)) === today) };
            this.futureEvents = { events: resp.filter(x => this.utilityService.formatDateToString(new Date(x.date)) > today) };
            console.log(resp);
            console.log(this.pastEvents);
            console.log(this.todayEvents);
            console.log(this.futureEvents);
        });
    }

}
