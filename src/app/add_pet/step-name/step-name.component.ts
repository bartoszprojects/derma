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

  name: StepName;
  form: any;
  profileForm = this.fb.group({
    name: ['', Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setName(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setName(this.profileForm.value);
    console.log(this.DataService.getName());

  }

  ngOnInit() {
    this.name = this.DataService.getName();
    console.log('Personal feature loaded!');

  }
}
