import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DBEvent } from '../../../../../shared-models/db/event.model';
import { FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/services';

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

    @Input() eventInformation: DBEvent = { id: null } as DBEvent;
    @Input() isEditMode: boolean;
    @Output() onClose: EventEmitter<boolean> = new EventEmitter();
    public validNotes = true;
    public savingEventID: number;
    public titleFormControl: FormControl = new FormControl('', [Validators.required]);
    public dateFormControl: FormControl = new FormControl('', [Validators.required]);
    public timeFormControl: FormControl<Date> = new FormControl(this.timeToDate('00:00'));
    public eventNum: number;
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
        if (!this.eventInformation || !this.eventInformation.id) {
            return;
        }
        this.titleFormControl = new FormControl(this.eventInformation.title, [Validators.required]);
        this.dateFormControl = new FormControl(`${this.eventInformation.date.split(' ')[0]}T00:00:00`, [Validators.required]);
        if (this.isEditMode) {
            this.timeFormControl.setValue(this.timeToDate(this.eventInformation.time));
            this.eventNum = this.eventInformation.num;
        }
    }

    public btnAddEvent(): void {
        this.isFormVisible = true;
        this.eventSchedulerService.getNextEventNum().subscribe(resp => {
            this.eventNum = resp;
        });
    }

    /** @param time 24-hour 'HH:mm[:ss]', as stored in the database */
    private timeToDate(time: string): Date {
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
    }

    public btnSave(): void {
        const alertIfNotValid = () => {
            if (this.titleFormControl.valid && this.dateFormControl.valid && this.dateFormControl.value) {
                return true;
            } else {
                alert('Event Date and Title must be entered');
                return false;
            }
        };
        if (this.validNotes) {
            if (alertIfNotValid()) {
                const time = this.timeFormControl.value;
                const event = {
                    id: this.isEditMode ? this.eventInformation.id : null,
                    title: this.titleFormControl.value,
                    date: this.dateFormControl.value,
                    time: this.utilityService.formatTimeToString(
                        time && `${time.getHours()}:${time.getMinutes()}`),
                } as DBEvent;
                (this.isEditMode
                    ? this.eventSchedulerService.putEventUpdate(event)
                    : this.eventSchedulerService.postEventCreate(event)
                ).subscribe(eventID => {
                    this.savingEventID = eventID;
                });
            }
        } else {
            if (alertIfNotValid()) {
                alert('Date must be entered for every note');
            }
        }
    }
}
