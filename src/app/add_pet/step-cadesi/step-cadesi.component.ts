import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-step-cadesi',
  templateUrl: './step-cadesi.component.html',
  styleUrls: ['./step-cadesi.component.scss']
})
export class StepCadesiComponent implements OnInit {
  rv: any;
  number = 0;
  constructor() {
  }

  ngOnInit() {
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
    "Ventral Tail": {
      "region": "Ventral Tail",
      "value_erythema": 0,
      "value_lichenification": 0,
      "value_alopecia": 0,
      "img_adress": "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/ventral_tail.png"
    },


  };

}
