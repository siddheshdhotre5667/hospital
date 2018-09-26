import { Component, OnInit } from '@angular/core';
import { PatientService } from "src/app/Services/PatientService";
import { ActivatedRoute } from '@angular/router'
import { Patient } from "src/app/Model/patient";
import { DatePipe } from "@angular/common";
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
  id;
  patarr:Patient[]=[];
  pat:Patient;
  error;
  shortdate:any;
  constructor(private patientService:PatientService,private activatedRoute:ActivatedRoute
              ,private datePipe:DatePipe
   ) { }

  ngOnInit() {
   this.id= this.activatedRoute.snapshot.params.id;
   console.log(this.id);
   this.pat=this.fetch(this.id);
   this.shortdate=this.datePipe.transform(this.pat.DateOfBirth , 'yyyy-MM-dd');
  }

fetch(patid):Patient
{
this.patarr=this.patientService.getAllPatients();
for(var i=0;i<this.patarr.length;i++)
{
  if(this.patarr[i].PatientId==patid)
  {
    
    return this.patarr[i];
  }
  else{
    this.error="patient not found";
    
  }

}

}

}
