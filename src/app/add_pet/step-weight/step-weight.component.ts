import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepWeight} from '../../formData.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-weight',
  templateUrl: './step-weight.component.html',
  styleUrls: ['./step-weight.component.scss']
})
export class StepWeightComponent implements OnInit {
  rv: any;
  weight_form: StepWeight;
  form: any;
 route_boolean;
  route_link_next;
  route_link_back;
  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = 'new-physical-consultation/success';
      this.route_link_back = 'new-physical-consultation/fat'
    }
    if (splitted_url[2] == 'add-pet') {
      this.route_boolean = 1;
      this.route_link_next = 'add-pet/fat';
      this.route_link_back = 'add-pet/physical';
    }
  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.weight_form = this.formDataService.getWeight();
  }

  save() {
    this.formDataService.setWeight(this.weight_form);
    return true;
  }
}
