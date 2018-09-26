import { Patient } from "src/app/Model/patient";
import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";

@Injectable()
export class PatientService
{
    constructor(public datepipe: DatePipe){}
    
patarr:Patient[]=
[  
{PatientId : 1, PatientName : "siddhesh", 
DateOfBirth : new Date('02/28/1994'), Age : 24,photopath:"assets/sid.jpeg"},

{PatientId : 2, PatientName : "Rohan", 
DateOfBirth : new Date('05/28/1974'), Age : 54,photopath:"assets/rohan.png"},

{PatientId : 3, PatientName : "Raj", 
DateOfBirth : new Date('05/28/1974'), Age : 34,photopath:"assets/rohan.png"}

];

getAllPatients():Patient[]
{
return this.patarr;

}

save(patient:Patient):void{
console.log("in second");
    this.patarr.push(patient);

}

delete(abc:number):void{
console.log("in delete");
var removeindex;
    for(var i=0;i<this.patarr.length;i++)
    {
        
        if(abc==this.patarr[i].PatientId)
        {
           removeindex=i; 
           break;
        }

    }
    this.patarr.splice(removeindex, 1);

}

}