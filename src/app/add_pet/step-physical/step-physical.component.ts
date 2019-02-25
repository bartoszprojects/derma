import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepPhysical} from '../../formData.model';

@Component({
  selector: 'app-step-physical',
  templateUrl: './step-physical.component.html',
  styleUrls: ['./step-physical.component.scss']
})
export class StepPhysicalComponent implements OnInit {

  physical_form: StepPhysical;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.physical_form = this.formDataService.getPhysical();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setPhysical(this.physical_form);
    return true;
  }
}
