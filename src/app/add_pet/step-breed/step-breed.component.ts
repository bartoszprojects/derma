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

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.breed_form = this.formDataService.getBreed();
    this.formDataService.getBreetDataFromBackend().subscribe(result => {
      this.breeds = result
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
