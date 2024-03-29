import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {StepFavrotCriteria} from '../../formData.model';
import {DataService} from '../../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-favrot-criteria',
  templateUrl: './step-favrot-criteria.component.html',
  styleUrls: ['./step-favrot-criteria.component.scss']
})

export class StepFavrotCriteriaComponent implements OnInit {
  title = 'Please tell us about yourself.';
  favrot_criteria: StepFavrotCriteria;
  favrot_click = 0;
  form: any;
  constructor(private router: Router, private formDataService: DataService) {
    this.formDataService.clearFavrot();
  }

  changeFavrotCheckboxes($event) {
    if ($event == true) {
      this.favrot_click += 1
    }
    if ($event == false){
      this.favrot_click -= 1
    }
  }

  ngOnInit() {
    this.favrot_click = 0;
    this.favrot_criteria = this.formDataService.getFavrotCriteria();
    console.log('Personal feature loaded!');
  }

  save() {
    this.favrot_click = 0;
    this.formDataService.setFavrotCriteria(this.favrot_criteria);
    return true;
  }

}
