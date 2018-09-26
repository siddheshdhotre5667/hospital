import { Component, OnInit } from '@angular/core';
import { Patient } from "src/app/Model/patient";
import { PatientService } from "src/app/Services/PatientService";
import { AgesortPipe } from "src/app/agesort.pipe";
import { DescPipe } from "src/app/desc.pipe";
import { Router } from '@angular/router'

@Component({
  selector: 'app-patient-list-component',
  templateUrl: './patient-list-component.component.html',
  styleUrls: ['./patient-list-component.component.css']
})
export class PatientListComponentComponent implements OnInit {
  patarr:Patient[]=[];
  hidden1=false;
  myvar;


  constructor(private patientService:PatientService, private agesortPipe:AgesortPipe,
  private descPipe:DescPipe,private router:Router) { 
    
   /* setInterval(() => {
    this.hidden1=false;
    },5000);*/
}
  
  undo(event1)
{
this.hidden1=false;
clearTimeout(this.myvar);
this.router.navigate(['/view'])


}
  
  ngOnInit() {
    this.patarr=this.patientService.getAllPatients();
  }

reveal(abc:number)
{

this.hidden1=true;
this.myvar=setTimeout(() => {
this.hidden1=false;
this.patientService.delete(abc);
this.router.navigate(['/view'])



}, 3000)

    

console.log("hi");
}
sortasc(abc)
  {
   this.patarr=this.agesortPipe.transform(this.patarr)
  }

  sortdsc(abc)
  {
   this.patarr=this.descPipe.transform(this.patarr)
  }

  /*sort(abc)
  {
   this.patarr.sort(function(obj1, obj2) {
	
	return obj1.Age - obj2.Age;
   
  })
}*/

}
