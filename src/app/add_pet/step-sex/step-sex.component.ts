import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepSex} from '../../formData.model';

@Component({
  selector: 'app-step-sex',
  templateUrl: './step-sex.component.html',
  styleUrls: ['./step-sex.component.scss']
})
export class StepSexComponent implements OnInit {

  sex: StepSex;
  form: any;
  profileForm = this.fb.group({
    sex: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setSex(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setSex(this.profileForm.value);
    console.log(this.DataService.getSex());

  }

  ngOnInit() {
    this.sex = this.DataService.getSex();
    console.log('Personal feature loaded!');

  }
}
