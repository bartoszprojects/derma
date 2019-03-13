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
    this.formDataService.setBreed(this.breed_form);
    return true;
  }

}
