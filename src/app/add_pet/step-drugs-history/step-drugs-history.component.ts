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
  id_pet;
  pet;
  show_button = false;
  last_drug_logs_data;

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
      this.show_button = true;
      this.route_boolean = 'new-physical-consultation';
      this.route_link_next = '../fat';
      this.route_link_back = '../cadesi';
    }
    if (this.router.url.includes(new_phone_consultation_substring)) {
      this.show_button = true;
      this.route_boolean = 'new-phone-consultation';
      this.route_link_next = '../success';
      this.route_link_back = '../cadesi';
    }
  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  getSingleDataFromBackend() {
    this.formDataService.getSingleDataFromBackend(this.id_pet.id_number).subscribe(result => {
      this.pet = result;
      console.log(this.pet['drug_logs']);
      this.last_drug_logs_data = this.pet['drug_logs'][Object.keys(this.pet['drug_logs'])[Object.keys(this.pet['drug_logs']).length-1]];
      this.drug_history_form.prednisolone = this.last_drug_logs_data.prednisolone;
      this.drug_history_form.oclacitinib = this.last_drug_logs_data.oclacitinib;
      this.drug_history_form.cyclosporine  = this.last_drug_logs_data.cyclosporine;
      this.drug_history_form.cortavance   = this.last_drug_logs_data.cortavance;
      this.drug_history_form.antibacterial_shampoo  = this.last_drug_logs_data.antibacterial_shampoo;
      this.drug_history_form.dermatologic_shampoo  = this.last_drug_logs_data.dermatologic_shampoo;
    });
  }

  ngOnInit() {
    this.id_pet = this.formDataService.getId();
    console.log('id_pet', this.id_pet);
    this.checkRouteUrl();
    this.drug_history_form = this.formDataService.getDrugHistory();
    this.getSingleDataFromBackend();


  }

  save() {
    this.formDataService.setDrugHistory(this.drug_history_form);
    return true;
  }

  check_button(value) {
    if (value == 'true') {
      this.show_button = true;
    }

    if (value == 'false') {
      this.show_button = false;
    }
  }
}
