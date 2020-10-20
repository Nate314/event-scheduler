import { EventViewDetailsComponent } from './components/event-view/event-view-details/event-view-details.component';
import { EventSchedulerService } from './services/event-scheduler/event-scheduler.service';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventViewComponent } from './components/event-view/event-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UtilityService } from './services/utility/utility.service';
import { ShellComponent } from './components/shell/shell.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatRippleModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule,
        MatRippleModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule,
        MatRippleModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
    ],
})
class MaterialModule { }

@NgModule({
    declarations: [
        HomeComponent,
        EventCreateComponent,
        EventListComponent,
        EventViewComponent,
        EventViewDetailsComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [
        EventSchedulerService,
        UtilityService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
})
class EventSchedulerModule { }

@NgModule({
    declarations: [
        AppComponent,
        ShellComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        EventSchedulerModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
