import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { EventSchedulerService } from './services/event-scheduler/event-scheduler.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilityService } from './services/utility/utility.service';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
class MaterialModule { }

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
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
  ],
})
class EventSchedulerModule { }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventSchedulerModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
