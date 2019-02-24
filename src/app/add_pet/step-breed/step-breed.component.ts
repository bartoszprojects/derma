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

  breed: StepBreed;
  form: any;
  profileForm = this.fb.group({
    crossed: [null, Validators.required],
    breed_dog_1: ['', Validators.required],
    breed_dog_2: ['', Validators.required],
    dog_format: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setBreed(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setBreed(this.profileForm.value);
    console.log(this.DataService.getBreed());

  }

  ngOnInit() {
    this.breed = this.DataService.getBreed();
    console.log('Personal feature loaded!');

  }
}
