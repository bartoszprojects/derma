import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepName} from '../../formData.model';

@Component({
  selector: 'app-step-name',
  templateUrl: './step-name.component.html',
  styleUrls: ['./step-name.component.scss']
})
export class StepNameComponent implements OnInit {
  name_form: StepName;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.name_form = this.formDataService.getName();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setName(this.name_form);
    return true;
  }
}



