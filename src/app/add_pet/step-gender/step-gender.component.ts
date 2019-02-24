import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepGender} from '../../formData.model';

@Component({
  selector: 'app-step-gender',
  templateUrl: './step-gender.component.html',
  styleUrls: ['./step-gender.component.scss']
})
export class StepGenderComponent implements OnInit {

  gender: StepGender;
  form: any;
  profileForm = this.fb.group({
    gender: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setGender(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setGender(this.profileForm.value);
    console.log(this.DataService.getGender());

  }

  ngOnInit() {
    this.gender = this.DataService.getGender();
    console.log('Personal feature loaded!');

  }
}
