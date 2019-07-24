import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepBreed} from '../../formData.model';

@Component({
  selector: 'app-step-breed',
  templateUrl: './step-breed.component.html',
  styleUrls: ['./step-breed.component.scss']
})
export class StepBreedComponent implements OnInit {
  breeds;
  breed_form: StepBreed;
  form: any;
  breeds_sorted_array = [];

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.breed_form = this.formDataService.getBreed();
    this.formDataService.getBreedDataFromBackend().subscribe(result => {
      this.breeds = result;
      let temp_array = [];
      for (let elem in this.breeds) {
        temp_array.push(this.breeds[elem])
      }
      this.breeds_sorted_array = temp_array.sort();
      console.log(this.breeds);
      console.log('aaaaarray', this.breeds_sorted_array);
      this.breeds = this.breeds_sorted_array;
    });
  }

  save() {
    for (let elem in this.breeds) {
      if (this.breeds && elem) {
        if (this.breeds[elem].name == this.breed_form.breed_dog_pure) {
          this.breed_form.breed_dog_pure = this.breeds[elem].id;
        }
        if (this.breeds[elem].name == this.breed_form.breed_dog_1) {
          this.breed_form.breed_dog_1 = this.breeds[elem].id;
        }
        if (this.breeds[elem].name == this.breed_form.breed_dog_2) {
          this.breed_form.breed_dog_2 = this.breeds[elem].id;
        }
      }
    }
    this.formDataService.setBreed(this.breed_form);
    return true;
  }


}
