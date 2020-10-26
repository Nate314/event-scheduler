import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
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
    MatTabsModule,
} from '@angular/material';
import {
    EventViewNotesComponent,
    NotesCreateComponent,
    EventCreateComponent,
    EventViewComponent,
    ShellComponent,
    LoginComponent,
    HomeComponent,
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
