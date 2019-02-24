import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepCadesi} from '../../formData.model';



@Component({
  selector: 'app-step-cadesi',
  templateUrl: './step-cadesi.component.html',
  styleUrls: ['./step-cadesi.component.scss']
})
export class StepCadesiComponent implements OnInit {
  rv: any;
  number = 0;



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


  updateErythema(wchich_region) {
    this.cadesi_details[wchich_region].value_erythema += 1;
    if (this.cadesi_details[wchich_region].value_erythema > 3) {
      this.cadesi_details[wchich_region].value_erythema = 0;
    }
    console.log(this.cadesi_details)
  }
  updateLichenification(wchich_region) {
    this.cadesi_details[wchich_region].value_lichenification += 1;
    if (this.cadesi_details[wchich_region].value_lichenification > 3) {
      this.cadesi_details[wchich_region].value_lichenification = 0;
    }
    console.log(this.cadesi_details)
  }
  updateAlopecia(wchich_region) {
    this.cadesi_details[wchich_region].value_alopecia += 1;
    if (this.cadesi_details[wchich_region].value_alopecia > 3) {
      this.cadesi_details[wchich_region].value_alopecia = 0;
    }
    console.log(this.cadesi_details)
  }


  title = 'Please tell us about yourself.';
  cadesi: StepCadesi;

  form: any;
  profileForm = this.fb.group({
    Perilabial_Area: [this.cadesi_details['Perilabial_Area'], Validators.required],
    Left_Medial_Pinna: [this.cadesi_details['Left_Medial_Pinna'], Validators.required],
    Right_Medial_Pinna: [this.cadesi_details['Right_Medial_Pinna'], Validators.required],
    Left_Axilla: [this.cadesi_details['Left_Axilla'], Validators.required],
    Right_Axilla: [this.cadesi_details['Right_Axilla'], Validators.required],
    Left_Front_Paw: [this.cadesi_details['Left_Front_Paw'], Validators.required],
    Right_Front_Paw: [this.cadesi_details['Right_Front_Paw'], Validators.required],
    Left_Hind_Paw: [this.cadesi_details['Left_Hind_Paw'], Validators.required],
    Right_Hind_Paw: [this.cadesi_details['Right_Hind_Paw'], Validators.required],
    Left_Cubital_Flexor: [this.cadesi_details['Left_Cubital_Flexor'], Validators.required],
    Right_Cubital_Flexor: [this.cadesi_details['Right_Cubital_Flexor'], Validators.required],
    Left_Palmar_Metacarpal: [this.cadesi_details['Left_Palmar_Metacarpal'], Validators.required],
    Right_Palmar_Metacarpal: [this.cadesi_details['Right_Palmar_Metacarpal'], Validators.required],
    Left_Flank: [this.cadesi_details['Left_Flank'], Validators.required],
    Right_Flank: [this.cadesi_details['Right_Flank'], Validators.required],
    Left_Inguinal_Aera: [this.cadesi_details['Left_Inguinal_Aera'], Validators.required],
    Right_Inguinal_Aera: [this.cadesi_details['Right_Inguinal_Aera'], Validators.required],
    Abdomen: [this.cadesi_details['Abdomen'], Validators.required],
    Perineum: [this.cadesi_details['Perineum'], Validators.required],
    Ventral_Tail: [this.cadesi_details['Ventral_Tail'], Validators.required],

  });
  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setCadesi(this.profileForm.value)
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setCadesi(this.profileForm.value);
    console.log(this.DataService.getCadesi());

  }

  ngOnInit() {
    this.cadesi = this.DataService.getCadesi();
    console.log('Personal feature loaded!');

  }
}


