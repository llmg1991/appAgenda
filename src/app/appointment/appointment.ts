import { Importance } from '../importance/importance';


export class Appointment {

    title:string;
    description:string;
    importance: Importance;
    startDate: Date;
    endDate: Date;


    constructor(title:string, description:string, importance: Importance, startDate:Date,endDate:Date) {

      this.title=title;
      this.description=description;
      this.importance=importance
      this.startDate= startDate;
      this.endDate=endDate;
    }
}
