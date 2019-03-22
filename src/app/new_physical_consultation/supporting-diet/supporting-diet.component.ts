import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Status} from "../../formData.model";
import {DataService} from "../../data.service";

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
  is_not_supporting_diet = 0;

  status_form: Status;
  form: any;

  make_diet_supporting() {
    this.is_not_supporting_diet = 1;
  }

  make_diet_not_supporting () {
    this.is_not_supporting_diet = 0;
  }

  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = '../pyoderma-otitis';
      this.route_link_back = '/home/new-physical-consultation/pet';
    }
    if (splitted_url[2] == 'new-phone-consultation') {
      this.route_boolean = 1;
      this.route_link_next = '../cadesi';
      this.route_link_back = '/home/new-phone-consultation/pet';
    }
  }

  constructor(private route: ActivatedRoute, private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.status_form = this.formDataService.getStatus();
    this.showUrlParam();
    this.checkRouteUrl();

  }
  showUrlParam() {
    const param = this.route.parent.snapshot.params['id'];
    console.log('SHOW PARAM FROM URL', param);
    this.get_param = param;
  }

  save() {
    if (this.is_not_supporting_diet == 1) {
      this.status_form.exclusion_reason.push("NOT_SUPPORTING_DIET");
      this.formDataService.setStatus(this.status_form);
      return true;
    }
  }
}
