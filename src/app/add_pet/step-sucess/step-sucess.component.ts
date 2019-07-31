import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../data.service';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-step-sucess',
  templateUrl: './step-sucess.component.html',
  styleUrls: ['./step-sucess.component.scss']
})
export class StepSucessComponent implements OnInit {
  @Input() formData;
  route_boolean;
  route_link_next;
  route_link_back;

    checkRouteUrl() {
    let add_pet_substring = "add-pet";
    let new_physical_consultation_substring = "new-physical-consultation";
    let new_phone_consultation_substring = "new-phone-consultation";

    if (this.router.url.includes(add_pet_substring)) {
      this.route_boolean = 'add-pet';
      this.route_link_next = 'add-pet/flea-treatment';
      this.route_link_back = 'add-pet/favrot-criteria'
    }
    if (this.router.url.includes(new_physical_consultation_substring)) {
      this.route_boolean = 'new-physical-consultation';
      this.route_link_next = 'new-physical-consultation/drugs-history';
      this.route_link_back = 'new-physical-consultation/flea-treatment'
    }
    if (this.router.url.includes(new_phone_consultation_substring)) {
      this.route_boolean = 'new-phone-consultation';
      this.route_link_next = 'new-phone-consultation/drugs-history';
      this.route_link_back = 'new-phone-consultation/supporting-diet'
    }
  }

  constructor(private router: Router, private DataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.formData = this.DataService.getFormData();
    if (this.route_boolean == 'add-pet') {
      this.DataService.sendDataToBackend();
      console.log('SEND DATA TO BACKEND')
    }
    if (this.route_boolean == 'new-physical-consultation') {
      this.DataService.putDataToBackend();
      console.log('PUT DATA TO BACKEND')
    }

    if (this.route_boolean == 'new-phone-consultation') {
      this.DataService.putDataToBackendPhoneCons();
    }


  }
}
