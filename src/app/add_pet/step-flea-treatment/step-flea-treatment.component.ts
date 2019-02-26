import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepFleaTreatment} from '../../formData.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-flea-treatment',
  templateUrl: './step-flea-treatment.component.html',
  styleUrls: ['./step-flea-treatment.component.scss']
})
export class StepFleaTreatmentComponent implements OnInit {

  flea_treatment: StepFleaTreatment;
  form: any;
  route_boolean;
  route_link_next;
  route_link_back;

  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = 'new-physical-consultation/cadesi';
      this.route_link_back = 'new-physical-consultation/pyoderma-otitis'
    }
    if (splitted_url[2] == 'add-pet') {
      this.route_boolean = 1;
      this.route_link_next = 'add-pet/food-allergy';
      this.route_link_back = 'add-pet/cadesi';
    }
  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.flea_treatment = this.formDataService.getFleaTreatment();

  }

  save() {
   this.formDataService.setFleaTreatment(this.flea_treatment);

    return true;
  }

}
