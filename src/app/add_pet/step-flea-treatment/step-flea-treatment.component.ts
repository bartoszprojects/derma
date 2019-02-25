import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepFleaTreatment} from '../../formData.model';


@Component({
  selector: 'app-step-flea-treatment',
  templateUrl: './step-flea-treatment.component.html',
  styleUrls: ['./step-flea-treatment.component.scss']
})
export class StepFleaTreatmentComponent implements OnInit {

  flea_treatment: StepFleaTreatment;
  form: any;

  constructor(private formDataService: DataService) {
  }


  ngOnInit() {
    this.flea_treatment = this.formDataService.getFleaTreatment();
    console.log('Personal feature loaded!');
  }


  save() {
    this.formDataService.setFleaTreatment(this.flea_treatment);
    return true;
  }

}
