import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {StepFavrotCriteria} from '../../formData.model';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-step-favrot-criteria',
  templateUrl: './step-favrot-criteria.component.html',
  styleUrls: ['./step-favrot-criteria.component.scss']
})
export class StepFavrotCriteriaComponent implements OnInit {
  title = 'Please tell us about yourself.';
  favrot_criteria: StepFavrotCriteria;
  form: any;
  profileForm = this.fb.group({
    three_years: [false, Validators.required],
    indoor_dog: [false, Validators.required],
    pruritus_corticoid: [false, Validators.required],
    no_lesion_pruritus: [false, Validators.required],
    front_feet: [false, Validators.required],
    ear_pinnae: [false, Validators.required],
    ear_margins: [false, Validators.required],
    dorso_lumbar: [false, Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setFavrotCriteria(this.profileForm.value);
    console.log(this.DataService.getFavrotCriteria());

  }

  ngOnInit() {
    this.favrot_criteria = this.DataService.getFavrotCriteria();
    console.log('Personal feature loaded!');

  }
}
