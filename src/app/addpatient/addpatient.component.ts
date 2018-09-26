import { Component, OnInit } from '@angular/core';
import { PatientService } from "src/app/Services/PatientService";
import { Router } from '@angular/router'
import { Patient } from "src/app/Model/patient";
import { DatePipe } from "@angular/common";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

patient:Patient= {
PatientId:null,
PatientName:null,
DateOfBirth:null,
Age:null,
photopath:"assets/sid.jpeg"

}
invalid:boolean=false ;
maxdate:string;

currentdate:Date = new Date();

  constructor(private patientService:PatientService, private router:Router, 
  
              private date1:DatePipe) { 

                this.maxdate= this.date1.transform(new Date(),'yyyy-MM-dd')
              }

  ngOnInit() {
  }

  savepat()
  {
    this.patientService.save(this.patient);
    this.router.navigate(['/view'])
    console.log("in first");
  }
  cal(patform: NgForm)
  {
    if(this.patient.DateOfBirth){
           var dob = this.date1.transform(this.patient.DateOfBirth, 'yyyy-MM-dd');
           var year = Number(dob.substr(0, 4));
           
           var month = Number(dob.substr(5, 2));
           var day = Number(dob.substr(8, 2));
           var today = new Date();
           var age = today.getFullYear() - year;

        if (month >= today.getMonth() && year>=today.getFullYear() &&  day>today.getDate() ) {
          this.invalid=true;
          
          console.log(this.maxdate + ' '+ new Date().toDateString());

        }
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
                age--;

               if(age<0)
                {         
                  age=0;
                }

}

this.patient.Age =age;

        }
  }
    
}
