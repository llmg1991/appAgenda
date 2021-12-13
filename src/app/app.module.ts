import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAppointComponent } from './new-appoint/new-appoint.component';
import { FormsModule }   from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';



import { MatSliderModule } from '@angular/material/slider';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule}from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';

import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { DataCRUDService } from './data/data-crud.service';

import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    NewAppointComponent,
    DialogComponent,
    AppointmentsListComponent
  ],
  imports: [
    MatSliderModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxMaterialTimepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule


    ],
  providers: [DataCRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
