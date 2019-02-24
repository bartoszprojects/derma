import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepFoodAllergy} from '../../formData.model';

@Component({
  selector: 'app-step-food-allergy',
  templateUrl: './step-food-allergy.component.html',
  styleUrls: ['./step-food-allergy.component.scss']
})
export class StepFoodAllergyComponent implements OnInit {

  food_allergy: StepFoodAllergy;
  form: any;
  profileForm = this.fb.group({
    excluded: [null, Validators.required],
    more_8_weeks: [null, Validators.required],
    industrial_or_homemade: [null, Validators.required],
    what_petfood: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setFoodAllergy(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setFoodAllergy(this.profileForm.value);
    console.log(this.DataService.getFoodAllergy());

  }

  ngOnInit() {
    this.food_allergy = this.DataService.getFoodAllergy();
    console.log('Personal feature loaded!');

  }
}
