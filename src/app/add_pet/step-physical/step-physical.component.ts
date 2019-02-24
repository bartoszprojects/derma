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

  physical: StepPhysical;
  form: any;
  profileForm = this.fb.group({
    physical_activity: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setPhysical(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setPhysical(this.profileForm.value);
    console.log(this.DataService.getPhysical());

  }

  ngOnInit() {
    this.physical = this.DataService.getPhysical();
    console.log('Personal feature loaded!');

  }
}
