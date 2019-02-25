import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepDesensitized} from '../../formData.model';

@Component({
  selector: 'app-step-desensitized',
  templateUrl: './step-desensitized.component.html',
  styleUrls: ['./step-desensitized.component.scss']
})
export class StepDesensitizedComponent implements OnInit {

  desensitized_form: StepDesensitized;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.desensitized_form = this.formDataService.getDesensitized();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setDesensitized(this.desensitized_form);
    return true;
  }
}
