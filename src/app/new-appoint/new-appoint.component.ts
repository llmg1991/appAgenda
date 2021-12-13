import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { Importance } from '../importance/importance';
import { DataCRUDService } from '../data/data-crud.service';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-new-appoint',
  templateUrl: './new-appoint.component.html',
  styleUrls: ['./new-appoint.component.css']
})

export class NewAppointComponent implements OnInit {
  
  appointment:Appointment = this.dataService.getSampleAppointment();
  importanceList = this.dataService.getImportanceList();

  _edittingAppointment: Boolean=false;

  _rangeDate: Date []= [];
  _iniHour={hour: 0, minute: 0};
  _endHour={hour: 23, minute: 55};

  
  
  

  constructor( private dataService:DataCRUDService){}

  public newAppointment(appointment){
    this.dataService.createNewAppointment(appointment.value);
  };

  public updateAppointment(appointment){
      this.dataService.updateAppointment(appointment);      
  };



  public submitForm(form){    

    if(this._edittingAppointment == false){
        this.newAppointment(form);
    }else{
      this.updateAppointment(form.value);
    };

    this.resetFormManual();
  }

  private subscriveServiceCurrentValue$(): void{
    this.dataService.subscriveCurrentAppo$().subscribe(
      result =>{
        //Update the results in the form.
        if (result != null){
          this.appointment = result
          //this._edittingAppointment = true
              
          
          
          //Updating _rangeDate value for displaying in the form
          this._rangeDate = new Array(2);          
          this._rangeDate[0] = new Date(result.startDate);
          this._rangeDate[1] = new Date(result.endDate);
          

          //I need to store the hours and minutes for displaying in the form
          this._iniHour = {
            hour:result.startDate.getHours(), 
            minute: result.startDate.getMinutes()}
          this._endHour ={
            hour: result.endDate.getHours(),
            minute: result.endDate.getMinutes()
          }
        }
        
      }
    );
  }
  
  private resetFormManual(){
    //As I need to keep the hours and minutes with default value (Ex: hour:00 minutes:05) and the Timepicker the only way to set up default value is using vars. I need to creat
    // a specific method for restarting the form.
 
    this.appointment = this.dataService.getSampleAppointment();
    this._rangeDate=null;
    this._iniHour={hour: 0, minute: 0};
    this._endHour={hour: 23, minute: 55};

  }

  private subscriveEditting(): void{
    this.dataService.subscriveEditting$().subscribe(
      result =>{
        this._edittingAppointment = result
        
      }
    );
  }


  ngOnInit(): void {
    this.subscriveServiceCurrentValue$(); 
    this.subscriveEditting();
  }

}