import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepSex} from '../../formData.model';

@Component({
  selector: 'app-step-sex',
  templateUrl: './step-sex.component.html',
  styleUrls: ['./step-sex.component.scss']
})
export class StepSexComponent implements OnInit {

  sex_form: StepSex;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.sex_form = this.formDataService.getSex();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setSex(this.sex_form);
    return true;
  }
}
