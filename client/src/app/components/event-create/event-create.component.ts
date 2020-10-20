import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

    @Input() eventInformation: DBEvent = { id: null } as DBEvent;
    @Input() isEditMode: boolean;
    @Output() onClose: EventEmitter<boolean> = new EventEmitter();
    public titleFormControl: FormControl = new FormControl('', [Validators.required]);
    public dateFormControl: FormControl = new FormControl('', [Validators.required]);
    public descriptionFormControl: FormControl = new FormControl('', [Validators.required]);
    private PisFormVisible: boolean;
    public get isFormVisible(): boolean {
        return this.PisFormVisible;
    }
    public set isFormVisible(value: boolean) {
        this.PisFormVisible = value;
        if (value === false) {
            [
                this.titleFormControl,
                this.dateFormControl,
                this.descriptionFormControl,
            ]
            .forEach(x => x.setValue(''));
            this.onClose.next(true);
        }
    }

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

    public btnSave(): void {
        const event = {
            id: this.isEditMode ? this.eventInformation.id : null,
            title: this.titleFormControl.value,
            date: this.utilityService.formatDateToString(new Date(this.dateFormControl.value)),
            description: this.descriptionFormControl.value,
        } as DBEvent;
        (this.isEditMode
            ? this.eventSchedulerService.putEventUpdate(event)
            : this.eventSchedulerService.postEventCreate(event)
        ).subscribe(resp => {
            console.log(resp);
            this.isFormVisible = false;
        });
    }
}
