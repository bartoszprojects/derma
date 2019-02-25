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

  gender_form: StepGender;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.gender_form = this.formDataService.getGender();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setGender(this.gender_form);
    return true;
  }
}
