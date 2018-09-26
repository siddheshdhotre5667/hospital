import {CanDeactivate} from '@angular/router'
import { Injectable } from '@angular/core'
import { PatientListComponentComponent } from "src/app/patient-list-component/patient-list-component.component";

@Injectable()
export class PatientGuard implements CanDeactivate<PatientListComponentComponent>
{
    canDeactivate(component:PatientListComponentComponent): boolean
    {
        return confirm('Are you sure about adding a new patient');

    }   

}