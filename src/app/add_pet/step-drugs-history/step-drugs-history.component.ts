import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepDrugsHistory} from '../../formData.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-drugs-history',
  templateUrl: './step-drugs-history.component.html',
  styleUrls: ['./step-drugs-history.component.scss']
})
export class StepDrugsHistoryComponent implements OnInit {

  drug_history_form: StepDrugsHistory;
  form: any;
  route_boolean;
  route_link_next;
  route_link_back;

checkRouteUrl() {
    let add_pet_substring = "add-pet";
    let new_physical_consultation_substring = "new-physical-consultation";
    let new_phone_consultation_substring = "new-phone-consultation";

    if (this.router.url.includes(add_pet_substring)) {
      this.route_boolean = 'add-pet';
      this.route_link_next = '/home/add-pet/name';
      this.route_link_back = '/home/add-pet/desensitized';
    }
    if (this.router.url.includes(new_physical_consultation_substring)) {
      this.route_boolean = 'new-physical-consultation';
      this.route_link_next = '../fat';
      this.route_link_back = '../cadesi';
    }
    if (this.router.url.includes(new_phone_consultation_substring)) {
      this.route_boolean = 'new-phone-consultation';
      this.route_link_next = 'new-phone-consultation/success';
      this.route_link_back = 'new-phone-consultation/cadesi';
    }
  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.drug_history_form = this.formDataService.getDrugHistory();
  }

  save() {
    this.formDataService.setDrugHistory(this.drug_history_form);
    return true;
  }
}
