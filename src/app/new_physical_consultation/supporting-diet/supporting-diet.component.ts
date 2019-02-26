import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-supporting-diet',
  templateUrl: './supporting-diet.component.html',
  styleUrls: ['./supporting-diet.component.scss']
})
export class SupportingDietComponent implements OnInit {
   route_boolean;
   route_link_next;
   route_link_back;

    checkRouteUrl() {
      let splitted_url = this.router.url.split('/');
      console.log(splitted_url);
      if (splitted_url[2] == 'new-physical-consultation') {
        this.route_boolean = 0;
        this.route_link_next = 'new-physical-consultation/pyoderma-otitis';
        this.route_link_back = 'new-physical-consultation/pet';
      }
      if (splitted_url[2] == 'new-phone-consultation') {
        this.route_boolean = 1;
        this.route_link_next = 'new-phone-consultation/cadesi';
        this.route_link_back = 'new-phone-consultation/pet';
      }
    }
  constructor(private router: Router) { }

  ngOnInit() {
      this.checkRouteUrl()
  }

}
