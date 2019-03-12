import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-supporting-diet',
  templateUrl: './supporting-diet.component.html',
  styleUrls: ['./supporting-diet.component.scss']
})
export class SupportingDietComponent implements OnInit {
  route_boolean;
  route_link_next;
  route_link_back;
  param_id;
  get_param;
  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = 'new-physical-consultation/update/' + this.get_param + '/pyoderma-otitis';
      this.route_link_back = 'new-physical-consultation/pet';
    }
    if (splitted_url[2] == 'new-phone-consultation') {
      this.route_boolean = 1;
      this.route_link_next = 'new-phone-consultation/cadesi';
      this.route_link_back = 'new-phone-consultation/pet';
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.showUrlParam();
    this.checkRouteUrl();

  }
  showUrlParam() {
    const param = this.route.parent.snapshot.params['id'];
    console.log('SHOW PARAM FROM URL', param);
    this.get_param = param;
  }
}
