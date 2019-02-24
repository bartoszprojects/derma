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
  profileForm = this.fb.group({
    flea_allergy_excluded: [0, Validators.required],
    flea_product: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setCadesi(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setFleaTreatment(this.profileForm.value);
    console.log(this.DataService.getFleaTreatment());

  }

  ngOnInit() {
    this.flea_treatment = this.DataService.getFleaTreatment();
    console.log('Personal feature loaded!');

  }
}
