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

  desensitized: StepDesensitized;
  form: any;
  profileForm = this.fb.group({
    desensitized: [null, Validators.required],
    desensitized_more_6_months: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setDesensitized(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setDesensitized(this.profileForm.value);
    console.log(this.DataService.getDesensitized());

  }

  ngOnInit() {
    this.desensitized = this.DataService.getDesensitized();
    console.log('Personal feature loaded!');

  }
}
