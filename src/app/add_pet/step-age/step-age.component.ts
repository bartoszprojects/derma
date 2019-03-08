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
  age_month;
  age_year;

  generateYears() {
    for (let i = 0; i < 25 + 1; i++) {
      this.years.push(Number(i))
    }
  }

  generateMonths() {
    for (let i = 0; i < 12 + 1; i++) {
      this.months.push(Number(i))
    }
  }

  age_form: StepAge;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.age_form = this.formDataService.getAge();
    this.generateYears();
    this.generateMonths();
    console.log('Personal feature loaded!');
  }

  save() {
    let full_age = this.age_month.toString() + '.' + this.age_year.toString();
    this.age_form.age = parseFloat(full_age);
    this.formDataService.setAge(this.age_form);
    return true;
  }



}
