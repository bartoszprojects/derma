import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {StepFat} from '../../formData.model';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-step-fat',
  templateUrl: './step-fat.component.html',
  styleUrls: ['./step-fat.component.scss']
})
export class StepFatComponent implements OnInit {
  title = 'Please tell us about yourself.';
  fat_form: StepFat;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.fat_form = this.formDataService.getFat();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setFat(this.fat_form);
    return true;
  }

}
