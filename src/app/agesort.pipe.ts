import { Pipe, PipeTransform } from '@angular/core';
import { PatientListComponentComponent } from './patient-list-component/patient-list-component.component'
import { Patient } from "src/app/Model/patient";
@Pipe({
  name: 'agesort'
})
export class AgesortPipe implements PipeTransform {

  transform(array: Patient[], args?: any): any {
 
  array.sort(function(obj1, obj2) {
	
	return obj1.Age - obj2.Age;
})
 return array;
  }
}
