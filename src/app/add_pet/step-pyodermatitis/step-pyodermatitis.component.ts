import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepPyodermatitis} from '../../formData.model';

@Component({
  selector: 'app-step-pyodermatitis',
  templateUrl: './step-pyodermatitis.component.html',
  styleUrls: ['./step-pyodermatitis.component.scss']
})
export class StepPyodermatitisComponent implements OnInit {

  pyodermatitis_form: StepPyodermatitis;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.pyodermatitis_form = this.formDataService.getPyodermatitis();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setPyodermatitis(this.pyodermatitis_form);
    return true;
  }
}
