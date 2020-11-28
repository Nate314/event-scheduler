import { EventSchedulerService, UtilityService } from 'src/app/services';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { Component, OnInit } from '@angular/core';

class MonthInfo {
    label: string;
    total: number;
    events: DBEvent[];
}

class YearInfo {
    label: string;
    total: number;
    months: MonthInfo[];
}

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    public loading: boolean;
    public pastEvents: DBEvent[];
    public todayEvents: DBEvent[];
    public futureEvents: DBEvent[];
    public eventsByYear: YearInfo[];
    private monthLabels  = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        // tslint:disable:object-literal-key-quotes
        '10': 'October',
        '11': 'November',
        '12': 'December',
        // tslint:enable:object-literal-key-quotes
    };

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.loading = true;
        this.eventSchedulerService.getEventIDs().subscribe(events => {
            const today = this.utilityService.formatDateToString(new Date());
            const filterOnToday = (f: (date: string, t: string) => boolean): DBEvent[] =>
                events.filter(x => f(this.utilityService.formatDateToString(new Date(`${x.date}T00:00:00`)), today));
            this.pastEvents = filterOnToday((date, t) => date < t);
            this.todayEvents = filterOnToday((date, t) => date === t);
            this.futureEvents = filterOnToday((date, t) => date > t).reverse();

            const eventDates = events.map(x => x.date);
            const eventYears = this.utilityService.distinct(eventDates.map(x => x.split('-')[0]));
            this.eventsByYear = eventYears.map(year => {
                const thisYearEvents = events.filter(x => x.date.startsWith(year));
                return {
                    label: year,
                    total: thisYearEvents.length,
                    months: Object.keys(this.monthLabels).map(month => {
                        const thisMonthEvents = thisYearEvents.filter(x => x.date.split('-')[1] === month);
                        return {
                            label: this.monthLabels[month],
                            total: thisMonthEvents.length,
                            events: thisMonthEvents,
                        } as MonthInfo;
                    }),
                };
            });
            this.loading = false;
        });
    }
}
