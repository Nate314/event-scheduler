import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTimepickerModule } from '@angular/material/timepicker';
import {
    EventViewNotesComponent,
    NotesCreateComponent,
    EventCreateComponent,
    EventViewComponent,
    ShellComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    ReportComponent,
} from './components';
import {
    EventSchedulerService,
    UtilityService,
} from './services';

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
        MatTabsModule,
        MatCheckboxModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTimepickerModule,
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
        MatTabsModule,
        MatCheckboxModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTimepickerModule,
    ],
})
class MaterialModule { }

@NgModule({
    declarations: [
        EventViewNotesComponent,
        EventCreateComponent,
        NotesCreateComponent,
        EventViewComponent,
        HomeComponent,
        AboutComponent,
        SearchComponent,
        ReportComponent,
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
