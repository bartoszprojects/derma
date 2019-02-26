import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
   route_boolean;
    route_link_next;
    route_link_back;

    checkRouteUrl() {
      let splitted_url = this.router.url.split('/');
      console.log(splitted_url);
      if (splitted_url[2] == 'new-physical-consultation') {
        this.route_boolean = 0;
        this.route_link_next = 'new-physical-consultation/supporting-diet';
      }
      if (splitted_url[2] == 'new-phone-consultation') {
        this.route_boolean = 1;
        this.route_link_next = 'new-phone-consultation/supporting-diet';
      }
    }

  constructor(private router: Router) { }

  ngOnInit() {
      this.checkRouteUrl()
  }

}
