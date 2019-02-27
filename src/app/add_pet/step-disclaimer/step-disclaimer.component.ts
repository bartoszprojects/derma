import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StepDisclaimer} from '../../formData.model';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-step-disclaimer',
  templateUrl: './step-disclaimer.component.html',
  styleUrls: ['./step-disclaimer.component.scss']
})

export class StepDisclaimerComponent implements OnInit {
  title = 'Please tell us about yourself.';
  disclaimer: StepDisclaimer;
  form: any;
  route_boolean;
  route_link_next;
  route_link_back;

  checkRouteUrl() {
    let add_pet_substring = "add-pet";
    let homemade_substring = "homemade";

    if (this.router.url.includes(add_pet_substring)) {
      this.route_boolean = 'add-pet';
      this.route_link_next = 'add-pet/favrot-criteria';
      this.route_link_back = 'welcome'
    }
    if (this.router.url.includes(homemade_substring)) {
      this.route_boolean = 'homemade';
      this.route_link_next = 'homemade/result';
      this.route_link_back = 'homemade/pet'
    }

  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.disclaimer = this.formDataService.getDisclaimer();

  }


  save() {
    this.formDataService.setDisclaimer(this.disclaimer);
    return true;
  }


}








