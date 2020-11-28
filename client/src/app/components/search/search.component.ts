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

    searchParams: any;
    searchResults: DBEvent[];
    searchBtnDisabled: boolean;
    eventTitleFormControl: FormControl = new FormControl('', []);
    eventMinDateFormControl: FormControl = new FormControl('', []);
    eventMaxDateFormControl: FormControl = new FormControl('', []);
    noteDescriptionFormControl: FormControl = new FormControl('', []);
    noteMinDateFormControl: FormControl = new FormControl('', []);
    noteMaxDateFormControl: FormControl = new FormControl('', []);
    notePinnedFormControl: FormControl = new FormControl(false, []);

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

    public getSeachParameters(): any {
        return {
            eventTitle: this.eventTitleFormControl.value,
            eventMinDate: this.utilityService.formatDateToString(new Date(this.eventMinDateFormControl.value)),
            eventMaxDate: this.utilityService.formatDateToString(new Date(this.eventMaxDateFormControl.value)),
            notesDescription: this.noteDescriptionFormControl.value,
            notesMinDate: this.utilityService.formatDateToString(new Date(this.noteMinDateFormControl.value)),
            notesMaxDate: this.utilityService.formatDateToString(new Date(this.noteMaxDateFormControl.value)),
            onlyIncludePinnedNoteEvents: this.notePinnedFormControl.value,
        };
    }

    public btnSearch(): void {
        this.searchParams = this.getSeachParameters();
        console.log(this.searchParams);
        this.searchBtnDisabled = true;
        this.eventSchedulerService.getSearchEvents(
            this.searchParams.eventTitle,
            this.searchParams.eventMinDate,
            this.searchParams.eventMaxDate,
            this.searchParams.notesDescription,
            this.searchParams.notesMinDate,
            this.searchParams.notesMaxDate,
            this.searchParams.onlyIncludePinnedNoteEvents,
        ).subscribe(resp => {
            this.searchBtnDisabled = false;
            this.searchResults = resp;
        });
    }
}
