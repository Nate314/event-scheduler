import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { EventInformation } from '../../../../../shared-models/event/event-information.model';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

    @Input() eventInformation: EventInformation = { id: null } as EventInformation;
    @Input() isEditMode: boolean;
    tempNextID = 1;
    isFormVisible: boolean;
    titleFormControl: FormControl = new FormControl('', [Validators.required]);
    dateFormControl: FormControl = new FormControl('', [Validators.required]);
    descriptionFormControl: FormControl = new FormControl('', [Validators.required]);

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.titleFormControl = new FormControl(this.eventInformation.title, [Validators.required]);
        this.dateFormControl = new FormControl(this.eventInformation.date, [Validators.required]);
        this.descriptionFormControl = new FormControl(this.eventInformation.description, [Validators.required]);
        console.log(this.eventInformation);
    }

    public btnAdd(): void {
        this.eventSchedulerService.postEventCreate({
            id: this.tempNextID++,
            title: this.titleFormControl.value,
            date: this.utilityService.formatDateToString(this.dateFormControl.value),
            description: this.descriptionFormControl.value,
        }).subscribe(resp => {
            console.log(resp);
        });
    }
}
