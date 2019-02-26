import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {StepFat} from '../../formData.model';
import {DataService} from '../../data.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-step-fat',
  templateUrl: './step-fat.component.html',
  styleUrls: ['./step-fat.component.scss']
})
export class StepFatComponent implements OnInit {
  title = 'Please tell us about yourself.';
  fat_form: StepFat;
  form: any;
  route_boolean;
  route_link_next;
  route_link_back;
  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = 'new-physical-consultation/weight';
      this.route_link_back = 'new-physical-consultation/drugs-history'
    }
    if (splitted_url[2] == 'add-pet') {
      this.route_boolean = 1;
      this.route_link_next = 'add-pet/owner-informations';
      this.route_link_back = 'add-pet/weight';
    }
  }


  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.fat_form = this.formDataService.getFat();

  }

  save() {
    this.formDataService.setFat(this.fat_form);
    return true;
  }

}
