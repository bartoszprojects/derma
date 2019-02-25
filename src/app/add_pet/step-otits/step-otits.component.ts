import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepOtitis} from '../../formData.model';

@Component({
  selector: 'app-step-otits',
  templateUrl: './step-otits.component.html',
  styleUrls: ['./step-otits.component.scss']
})
export class StepOtitsComponent implements OnInit {

  otitis_form: StepOtitis;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.otitis_form = this.formDataService.getOtitis();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setOtitis(this.otitis_form);
    return true;
  }
}
