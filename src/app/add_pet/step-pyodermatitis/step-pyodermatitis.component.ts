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

  pyodermatitis: StepPyodermatitis;
  form: any;
  profileForm = this.fb.group({
    pyodermatitis: [null, Validators.required],
    pyodermatitis_history: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setFoodAllergy(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setPyodermatitis(this.profileForm.value);
    console.log(this.DataService.getPyodermatitis());

  }

  ngOnInit() {
    this.pyodermatitis = this.DataService.getPyodermatitis();
    console.log('Personal feature loaded!');

  }
}
