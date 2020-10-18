import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

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

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
        private router: Router,
    ) {
    }

    public ngOnInit(): void {
    }

}
