import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepCadesi} from '../../formData.model';
import {Router} from "@angular/router";


@Component({
  selector: 'app-step-cadesi',
  templateUrl: './step-cadesi.component.html',
  styleUrls: ['./step-cadesi.component.scss']
})
export class StepCadesiComponent implements OnInit {
  rv: any;
  number = 0;
  route_boolean;
  route_link_next;
  route_link_back;
  vertical = true;
  invert = true;
  thumbLabel = true;

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

  cadesi_details = {
    "Perilabial_Area": {
      "region": "Perilabial Area",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/perilabial.png"
    },
    "Left_Medial_Pinna": {
      "region": "Left Medial Pinna",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/medial_pinna_L.png"
    },
    "Right_Medial_Pinna": {
      "region": "Right Medial Pinna",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/medial_pinna_R.png"

    },
    "Left_Axilla": {
      "region": "Left Axilla",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/axilla_L.png"
    },
    "Right_Axilla": {
      "region": "Right Axilla",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/axilla_R.png"
    },
    "Left_Front_Paw": {
      "region": "Left Front Paw",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/front_paw_L.png"
    },
    "Right_Front_Paw": {
      "region": "Right Front Paw",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/front_paw_R.png"
    },
    "Left_Hind_Paw": {
      "region": "Left Hind Paw",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/hind_paw_L.png"
    },
    "Right_Hind_Paw": {
      "region": "Right Hind Paw",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/hind_paw_R.png"
    },
    "Left_Cubital_Flexor": {
      "region": "Left Cubital Flexor",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/cubital_flexor_L.png"
    },
    "Right_Cubital_Flexor": {
      "region": "Right Cubital Flexor",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/cubital_flexor_R.png"
    },
    "Left_Palmar_Metacarpal": {
      "region": "Left Palmar Metacarpal",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/palmar_metacarpal_L.png"
    },

    "Right_Palmar_Metacarpal": {
      "region": "Right Palmar Metacarpal",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/palmar_metacarpal_R.png"
    },

    "Left_Flank": {
      "region": "Left Flank",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/flank_L.png"
    },
    "Right_Flank": {
      "region": "Right Flank",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/flank_R.png"
    },
    "Left_Inguinal_Aera": {
      "region": "Left Inguinal Aera",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/inguinal_L.png"
    },
    "Right_Inguinal_Aera": {
      "region": "Right Inguinal Aera",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/inguinal_R.png"
    },

    "Abdomen": {
      "region": "Abdomen",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/abdomen.png"
    },
    "Perineum": {
      "region": "Perineum",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/perineum.png"
    },
    "Ventral_Tail": {
      "region": "Ventral Tail",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/ventral_tail.png"
    },
  };

  countTotal(which_region) {
    let number = 0;
    Object.entries(this.cadesi_details).forEach(([key, value]) => {
      number += value.value_erythema;
      number += value.value_alopecia;
      number += value.value_lichenification;
    });
    let final_number = number;
    this.cadesi.total = final_number;
  }

  updateErythema(wchich_region) {
    this.cadesi_details[wchich_region].value_erythema += 1;
    if (this.cadesi_details[wchich_region].value_erythema > 3) {
      this.cadesi_details[wchich_region].value_erythema = 0;
    }
    this.cadesi.cadesi_details_logs[wchich_region].value_erythema = (this.cadesi_details[wchich_region].value_erythema)
  }

  updateLichenification(wchich_region) {
    this.cadesi_details[wchich_region].value_lichenification += 1;
    if (this.cadesi_details[wchich_region].value_lichenification > 3) {
      this.cadesi_details[wchich_region].value_lichenification = 0;
    }
    this.cadesi.cadesi_details_logs[wchich_region].value_lichenification = (this.cadesi_details[wchich_region].value_lichenification)
  }

  updateAlopecia(wchich_region) {
    this.cadesi_details[wchich_region].value_alopecia += 1;
    if (this.cadesi_details[wchich_region].value_alopecia > 3) {
      this.cadesi_details[wchich_region].value_alopecia = 0;
    }
    this.cadesi.cadesi_details_logs[wchich_region].value_alopecia = (this.cadesi_details[wchich_region].value_alopecia)
  }

  cadesi: StepCadesi;
  form: any;

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.checkRouteUrl();
    this.cadesi = this.formDataService.getCadesi();
  }

  save() {
    this.formDataService.setCadesi(this.cadesi);
    return true;
  }

}


