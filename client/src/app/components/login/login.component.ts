import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';

const passwordValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} => {
    const value: string = control.value ? control.value : '';
    const valueContainsCharacterInCharset = (arr: string) => arr.split('').map(x => value.includes(x)).includes(true);
    const valid = value.length >= 8
        && valueContainsCharacterInCharset('abcdefghijklmnopqrstuvwxyz')
        && valueContainsCharacterInCharset('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        && valueContainsCharacterInCharset('0123456789')
        && valueContainsCharacterInCharset('`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?');
    return valid ? null : {password: true};
};
@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

    userCount: number;
    isCreateAccountMode: boolean;
    usernameFormControl: FormControl = new FormControl('', [Validators.required]);
    passwordFormControl: FormControl = new FormControl('', [Validators.required, passwordValidator]);
    confirmPasswordFormControl: FormControl = new FormControl('', [Validators.required]);

    constructor(
        private eventSchedulerService: EventSchedulerService,
        private utilityService: UtilityService,
        private router: Router,
    ) { }

    public ngOnInit(): void {
        const token = this.utilityService.getToken();
        if (token && !token.isExpired()) {
            this.router.navigate(['/home']);
        } else {
            this.utilityService.deleteToken();
            this.eventSchedulerService.getUserCount().subscribe(resp => {
                this.userCount = resp;
            }, data => {
                this.userCount = -1;
            });
        }
    }

    public btnSubmit(): void {
        if (this.isCreateAccountMode) {
            if (this.passwordFormControl.value !== this.confirmPasswordFormControl.value) {
                alert('Password and Confirm Password must match');
                return;
            }
            this.eventSchedulerService.postAuthCreateAccount(
                this.usernameFormControl.value,
                this.passwordFormControl.value,
            ).subscribe(resp => {
                if (resp) {
                    this.isCreateAccountMode = false;
                    this.btnSubmit();
                } else {
                    alert('Error creating account');
                }
            }, err => alert(JSON.stringify(err)));
        } else {
            this.eventSchedulerService.postAuthLogin(
                this.usernameFormControl.value,
                this.passwordFormControl.value,
            ).subscribe(resp => {
                if (resp) {
                    this.utilityService.setToken(resp);
                    this.router.navigate(['/home']);
                } else {
                    alert('Incorrect credentials');
                }
            }, err => alert(JSON.stringify(err)));
        }
    }

}
