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

  malassezia: StepMalassezia;
  form: any;
  profileForm = this.fb.group({
    malassezia: [null, Validators.required],
    malassezia_history: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setMalassezia(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setMalassezia(this.profileForm.value);
    console.log(this.DataService.getMalassezia());

  }

  ngOnInit() {
    this.malassezia = this.DataService.getMalassezia();
    console.log('Personal feature loaded!');

  }
}
