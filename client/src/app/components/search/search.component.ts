import { EventSchedulerService, UtilityService } from 'src/app/services';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchResults: DBEvent[];
    eventTitleFormControl: FormControl = new FormControl('', []);
    eventMinDateFormControl: FormControl = new FormControl('', []);
    eventMaxDateFormControl: FormControl = new FormControl('', []);
    noteDescriptionFormControl: FormControl = new FormControl('', []);
    noteMinDateFormControl: FormControl = new FormControl('', []);
    noteMaxDateFormControl: FormControl = new FormControl('', []);

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        const now = moment();
        const year = now.year;
        const month = now.month;
        const day = now.date;
        this.eventMinDateFormControl.setValue(new Date(`${year}-01-01`));
        this.eventMaxDateFormControl.setValue(new Date(`${year}-${month}-${day}`));
    }

    public btnSearch(): void {
        this.eventSchedulerService.getSearchEvents(
            this.eventTitleFormControl.value,
            this.utilityService.formatDateToString(new Date(this.eventMinDateFormControl.value)),
            this.utilityService.formatDateToString(new Date(this.eventMaxDateFormControl.value)),
            this.noteDescriptionFormControl.value,
            this.utilityService.formatDateToString(new Date(this.noteMinDateFormControl.value)),
            this.utilityService.formatDateToString(new Date(this.noteMaxDateFormControl.value)),
        ).subscribe(resp => {
            this.searchResults = resp;
        });
    }
}
