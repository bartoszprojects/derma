import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepWeight} from '../../formData.model';

@Component({
  selector: 'app-step-weight',
  templateUrl: './step-weight.component.html',
  styleUrls: ['./step-weight.component.scss']
})
export class StepWeightComponent implements OnInit {
  rv: any;
  weight_form: StepWeight;
  form: any;


  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.weight_form = this.formDataService.getWeight();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setWeight(this.weight_form);
    return true;
  }
}
