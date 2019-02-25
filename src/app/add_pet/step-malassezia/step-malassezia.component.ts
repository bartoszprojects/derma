import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepMalassezia} from '../../formData.model';

@Component({
  selector: 'app-step-malassezia',
  templateUrl: './step-malassezia.component.html',
  styleUrls: ['./step-malassezia.component.scss']
})
export class StepMalasseziaComponent implements OnInit {

  malassezia_form: StepMalassezia;
  form: any;


  constructor(private fb: FormBuilder, private formDataService: DataService) {
  }

  ngOnInit() {
    this.malassezia_form = this.formDataService.getMalassezia();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setMalassezia(this.malassezia_form);
    return true;
  }
}
