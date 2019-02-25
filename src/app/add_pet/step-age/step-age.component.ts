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
    this.formDataService.setAge(this.age_form);
    return true;
  }
}
