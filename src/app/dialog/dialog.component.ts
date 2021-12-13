import { Component, Inject, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../appointment/appointment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataCRUDService } from '../data/data-crud.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DialogComponent implements OnInit {
  closeResult: string;

  constructor( private service:DataCRUDService, config: NgbModalConfig, private modalService: NgbModal,@Inject(MAT_DIALOG_DATA) public data) { 
    config.backdrop = 'static';
    config.keyboard = false;

  }

  public editAppoint(appo:Appointment){
    console.log(appo)
    
    this.service.editAppointment(appo);
  }
  

  ngOnInit(): void {
  }

}
