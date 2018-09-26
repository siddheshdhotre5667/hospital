import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from "@angular/common";
import { AppComponent } from './app.component';
import { PatientListComponentComponent } from './patient-list-component/patient-list-component.component';
import { PatientService } from "src/app/Services/PatientService";
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import { AgesortPipe } from './agesort.pipe';
import { DescPipe } from './desc.pipe'
import { PatientGuard } from "src/app/patient-list-component/patientguard-service";
import { AddpatientComponent } from './addpatient/addpatient.component';
import {NgForm, FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';

const routeall : Routes =
 [
{path: 'view',component : PatientListComponentComponent, canDeactivate:[PatientGuard]},
{path: 'add',component : AddpatientComponent},
{path: 'search',component : SearchComponent},
{path: 'search/:id',component : UserdisplayComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponentComponent,
    NavComponent,
    AgesortPipe,
    DescPipe,
    AddpatientComponent,
    SearchComponent,
    UserdisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeall)
  ],
  providers: [PatientService,DatePipe,AgesortPipe,DescPipe,PatientGuard,NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
