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

  otitis: StepOtitis;
  form: any;
  profileForm = this.fb.group({
    recurring_otitis: [null, Validators.required],
    otitis: [null, Validators.required],
    otitis_history: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setOtitis(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setOtitis(this.profileForm.value);
    console.log(this.DataService.getOtitis());

  }

  ngOnInit() {
    this.otitis = this.DataService.getOtitis();
    console.log('Personal feature loaded!');

  }
}
