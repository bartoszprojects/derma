import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepAge} from '../../formData.model';

@Component({
  selector: 'app-step-age',
  templateUrl: './step-age.component.html',
  styleUrls: ['./step-age.component.scss']
})
export class StepAgeComponent implements OnInit {
  years = [];
  months = [];

  generateYears() {
    for (let i = 0; i < 25 + 1; i++) {
      this.years.push(i + ' years')
    }
  }

  generateMonths() {
    for (let i = 0; i < 12 + 1; i++) {
      this.months.push(i + ' months')
    }
  }

  age: StepAge;
  form: any;
  profileForm = this.fb.group({
    age_year: ['', Validators.required],
    age_month: ['', Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setAge(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setAge(this.profileForm.value);
    console.log(this.DataService.getAge());

  }

  ngOnInit() {
    this.age = this.DataService.getAge();
    console.log('Personal feature loaded!');
    this.generateYears();
    this.generateMonths();
  }
}
