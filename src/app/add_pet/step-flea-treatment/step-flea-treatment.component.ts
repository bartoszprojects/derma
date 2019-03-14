import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepFleaTreatment} from '../../formData.model';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-step-flea-treatment',
  templateUrl: './step-flea-treatment.component.html',
  styleUrls: ['./step-flea-treatment.component.scss']
})
export class StepFleaTreatmentComponent implements OnInit {

  flea: StepFleaTreatment;
  form: any;
  route_boolean;
  route_link_next;
  route_link_back;

  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = '../cadesi';
      this.route_link_back = '../pyoderma-otitis'
    }
    if (splitted_url[2] == 'add-pet') {
      this.route_boolean = 1;
      this.route_link_next = '/home/add-pet/food-allergy';
      this.route_link_back = '/home/add-pet/cadesi';
    }
  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        document.body.scrollTop = 0;
    });
    this.checkRouteUrl();
    this.flea = this.formDataService.getFleaTreatment();
  }

  save() {
   this.formDataService.setFleaTreatment(this.flea);

    return true;
  }

}
