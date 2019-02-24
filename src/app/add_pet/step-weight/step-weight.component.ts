import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepWeight} from '../../formData.model';

@Component({
  selector: 'app-step-weight',
  templateUrl: './step-weight.component.html',
  styleUrls: ['./step-weight.component.scss']
})
export class StepWeightComponent implements OnInit {

  weight: StepWeight;
  form: any;
  profileForm = this.fb.group({
    weight: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setWeight(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setWeight(this.profileForm.value);
    console.log(this.DataService.getWeight());

  }

  ngOnInit() {
    this.weight = this.DataService.getWeight();
    console.log('Personal feature loaded!');

  }
}
