import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../appointment/appointment';
import { DialogComponent } from './dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class ModalPopUpService {

  private  appointmentDialog = new Appointment();

  constructor(private dialogRef: MatDialog) { }
  

  openModal(appoint: Appointment){
    console.log("In Modal");
    console.log(appoint);
    //pass information to component HTML.
    //1st Create an Appointment object and store the info
    

    this.appointmentDialog = appoint;


    
   

    /*var modalRef = this.ngbModel.open(DialogComponent, {size:'md', backdrop:'static'})
    return modalRef.result;*/
  }
}
