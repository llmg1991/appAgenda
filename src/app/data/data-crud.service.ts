import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { Importance } from '../importance/importance';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataCRUDService {

  private _arrayAppointments:Appointment[] = []
  

  //For updating, we are going to display the date of the appointment in the Form. So,
  //we create a new var for storing the value for editting.
  private _currentAppoEditting : Appointment = null;

  //While editting: I am going to store the index of the appointment for keeping the position of it for updating.
  private _indexAppointmentEditting: number;
  
  private appointments$: BehaviorSubject<Appointment[]> = new BehaviorSubject(this._arrayAppointments);
  private currentAppoEditting$ :BehaviorSubject <Appointment> = new BehaviorSubject(this._currentAppoEditting);

  //We want to show Edit button, inset of ADD, in the form and we are not going to be able to delete any appointment
  //while we are editting
  private _editting:Boolean=false;
  private editting$:BehaviorSubject <Boolean> = new BehaviorSubject(this._editting);



  constructor() { }


  //METHODS:

  //Add:
  public createNewAppointment(appointment):void{

   
    //Build object
    var appo = new Appointment(
      appointment.title,
      appointment.description,
      appointment.importance,
      appointment.startDate,
      appointment.endDate
    );
    
    //Set time to the object:
    appo.startDate= new Date(appointment.rangeDate[0]);
    appo.startDate.setHours(appointment.From.hour); 
    appo.startDate.setMinutes(appointment.From.minute);

    appo.endDate= new Date(appointment.rangeDate[1])
    appo.endDate.setHours(appointment.To.hour);
    appo.endDate.setMinutes(appointment.To.minute);

    //Add to Appointment array
    this._arrayAppointments.push(appo);
    //Sorting array by Date
    this._arrayAppointments=this.sortAppointments

    //If we need to update. Delete past appointment
    this.appointments$.next(this._arrayAppointments);

  }

  //Delete:
  public deleteAppointment(appoinement:Appointment){
    
    if(this._editting==false){
      var objectIndex:number =this._arrayAppointments.indexOf(appoinement);
      this._arrayAppointments.splice(objectIndex,1);
    }else{
      alert("Can't delete appointemnts while editting. ")
    }
    
  }

  

  //Update:
  public editAppointment(appointment:Appointment){
    
    this._editting=true;
    this.editting$.next(this._editting)
    //We are going to work in a copy of the original appointment
    this._currentAppoEditting= {...appointment};
    this.currentAppoEditting$.next(this._currentAppoEditting);
    this._indexAppointmentEditting=this._arrayAppointments.indexOf(appointment);
    
  }

  public updateAppointment(appointment){
    

    this._arrayAppointments[this._indexAppointmentEditting].title = appointment.title;
    this._arrayAppointments[this._indexAppointmentEditting].description= appointment.description;
    this._arrayAppointments[this._indexAppointmentEditting].importance = appointment.importance;
    this._arrayAppointments[this._indexAppointmentEditting].startDate = new Date(appointment.rangeDate[0]);
    this._arrayAppointments[this._indexAppointmentEditting].startDate.setHours(appointment.From.hour);
    this._arrayAppointments[this._indexAppointmentEditting].startDate.setMinutes(appointment.From.minute);

    this._arrayAppointments[this._indexAppointmentEditting].endDate = new Date(appointment.rangeDate[1]);
    this._arrayAppointments[this._indexAppointmentEditting].endDate.setHours(appointment.To.hour);
    this._arrayAppointments[this._indexAppointmentEditting].endDate.setMinutes(appointment.To.minute);

    this._editting=false;
    this.editting$.next(this._editting)
  
    //Sorting array by Date
    this._arrayAppointments=this.sortAppointments

    

  }

  get sortAppointments(){
    return this._arrayAppointments.sort((b,a)=>{
      return <any>new Date(b.startDate)-<any>new Date(a.startDate);
    });
  }

  public getSampleAppointment(): Appointment{
    
    var appointment: Appointment ={
        title:'',
        description:'',
        importance:{
          identify:0,
          ImportanceName:'Low',
          color:"border-success"
        },
        startDate: new Date,
        endDate: new Date
      };

      appointment.startDate.setHours(0,0);
      appointment.endDate.setHours(23,55)

    return appointment;
  }

  public getImportanceList(): Importance[]{
    
    var importanceList : Importance[] =
    [{
      identify:0,
      ImportanceName:'Low',
      color:"success"
    },
    {
      identify:1,
      ImportanceName:'Meddium',
      color:"warning"
    },
    {
      identify:2,
      ImportanceName:'Urgent',
      color:"danger"
    }
  ]

  return importanceList;


      
  }

  


  public subscriveAppointments$(): Observable<Appointment[]> {
    return this.appointments$.asObservable();
  };

  public subscriveCurrentAppo$(): Observable<Appointment> {
    return this.currentAppoEditting$.asObservable();
  }

  public subscriveEditting$(): Observable<Boolean> {
    return this.editting$.asObservable();
  }

 



}
