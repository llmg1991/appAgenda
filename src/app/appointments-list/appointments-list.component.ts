import { Component, Injector, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { Appointment } from '../appointment/appointment';
import { DataCRUDService } from '../data/data-crud.service';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  arrayAppointments: Appointment[]=[];
  _edittingAppointment$:Boolean=false;

  constructor( private dialogRef : MatDialog,private service:DataCRUDService) { }


  deleteAppointment(appointment):void{
      this.service.deleteAppointment(appointment);
  };

  editAppointment(appointment):void{
      this.service.editAppointment(appointment);
  };

  

  private subscriveServiceListArray(): void{
    this.service.subscriveAppointments$().subscribe(
      result =>{
        this.arrayAppointments = result
      }
    );
  }
  private subscriveEditting(): void{
    this.service.subscriveEditting$().subscribe(
      result =>{
        this._edittingAppointment$ = result
      }
    );
  }

  openDialog(appoint: Appointment){
    this.dialogRef.open(DialogComponent, { data:{appoint }  });
  }

  ngOnInit(): void {
    this.subscriveServiceListArray();
    this.subscriveEditting();
  }

}
