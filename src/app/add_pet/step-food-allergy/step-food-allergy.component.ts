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

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.food_allergy = this.formDataService.getFoodAllergy();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setFoodAllergy(this.food_allergy);
    return true;
  }
}
