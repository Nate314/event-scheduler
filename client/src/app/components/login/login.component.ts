import { EventSchedulerService } from 'src/app/services/event-scheduler/event-scheduler.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

    isCreateAccountMode: boolean;
    usernameFormControl: FormControl = new FormControl('', [Validators.required]);
    passwordFormControl: FormControl = new FormControl('', [Validators.required]);
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
