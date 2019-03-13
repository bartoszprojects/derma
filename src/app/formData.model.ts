let cadesi_dictionary = {
  "Abdomen": {},
  "Perineum": {},
  "Left_Flank": {},
  "Left_Axilla": {},
  "Right_Flank": {},
  "Right_Axilla": {},
  "Ventral Tail": {},
  "Left_Hind_Paw": {},
  "Left_Front_Paw": {},
  "Right_Hind_Paw": {},
  "Perilabial_Area": {},
  "Right_Front_Paw": {},
  "Left_Medial_Pinna": {},
  "Left_Inguinal_Aera": {},
  "Right_Medial_Pinna": {},
  "Left_Cubital_Flexor": {},
  "Right_Inguinal_Aera": {},
  "Right_Cubital_Flexor": {},
  "Left_Palmar_Metacarpal": {},
  "Right_Palmar_Metacarpal": {},
  "Ventral_Tail": {}
};

export class FormData {
  id_number = 0;
  diet_agreed = false;
  three_years = false;
  indoor_dog = false;
  pruritus_corticoid = false;
  no_lesion_pruritus = false;
  front_feet = false;
  ear_pinnae = false;
  ear_margins = false;
  dorso_lumbar = false;
  cadesi_details_logs = cadesi_dictionary;
  total = 0;
  pruritus_score = 0;
  flea_allergy_excluded = null;
  flea_treatment = '';
  excluded = null;
  more_8_weeks = null;
  industrial_or_homemade = '';
  what_petfood = '';
  pyodermatitis = null;
  pyodermatitis_history = null;
  malassezia = null;
  malassezia_history = null;
  recurring_otitis = null;
  otitis = null;
  otitis_history = null;
  desensitized = null;
  desensitized_more_6_months = null;
  drug_history_known = null;
  prednisolone = 0;
  oclacitinib = 0;
  cyclosporine = 0;
  cortavance = 0;
  antibacterial_shampoo = 0;
  dermatologic_shampoo = 0;
  omega = 0;
  yeast = 0;
  name = '';
  age = '';
  crossed = 0;
  breed_dog_pure = '';
  breed_dog_1 = '';
  breed_dog_2 = '';
  dog_format = '';
  gender = '';
  sexual_capacity = '';
  physical_activity = '';
  weight = 0;
  fat_score_dog = 0;
  owner_name = '';
  owner_phone = '';
  owner_email = '';
  accept_data_sharing = false;

  clear() {
    this.id_number = 0;
    this.diet_agreed = false;
    this.indoor_dog = false;
    this.pruritus_corticoid = false;
    this.no_lesion_pruritus = false;
    this.front_feet = false;
    this.ear_pinnae = false;
    this.ear_margins = false;
    this.dorso_lumbar = false;
    this.cadesi_details_logs = cadesi_dictionary;
    this.total = 0;
    this.pruritus_score = 0;
    this.flea_allergy_excluded = null;
    this.flea_treatment = '';
    this.excluded = null;
    this.more_8_weeks = null;
    this.industrial_or_homemade = '';
    this.what_petfood = '';
    this.pyodermatitis = null;
    this.pyodermatitis_history = null;
    this.malassezia = null;
    this.malassezia_history = null;
    this.recurring_otitis = null;
    this.otitis = null;
    this.otitis_history = null;
    this.desensitized = null;
    this.desensitized_more_6_months = null;
    this.drug_history_known = null;
    this.prednisolone = 0;
    this.oclacitinib = 0;
    this.cyclosporine = 0;
    this.cortavance = 0;
    this.antibacterial_shampoo = 0;
    this.dermatologic_shampoo = 0;
    this.omega = 0;
    this.yeast = 0;
    this.name = '';
    this.age = '';
    this.crossed = 0;
    this.breed_dog_pure = '';
    this.breed_dog_1 = '';
    this.breed_dog_2 = '';
    this.dog_format = '';
    this.gender = '';
    this.sexual_capacity = '';
    this.physical_activity = '';
    this.weight = 0;
    this.fat_score_dog = 0;
    this.owner_name = '';
    this.owner_phone = '';
    this.owner_email = '';
    this.accept_data_sharing = false;
  }
}

export class idPetModel {
  id_number: number = 0;
}

export class StepDisclaimer {
  diet_agreed: boolean = false;
}

export class StepFavrotCriteria {
  three_years: boolean = false;
  indoor_dog: boolean = false;
  pruritus_corticoid: boolean = false;
  no_lesion_pruritus: boolean = false;
  front_feet: boolean = false;
  ear_pinnae: boolean = false;
  ear_margins: boolean = false;
  dorso_lumbar: boolean = false;
}

export class StepCadesi {
  cadesi_details_logs?: any;
  total: number = 0;
  pruritus_score: number = 0;
}

export class StepFleaTreatment {
  flea_allergy_excluded?: boolean = null;
  flea_treatment?: string = '';
}

export class StepFoodAllergy {
  excluded?: boolean = null;
  more_8_weeks?: boolean = null;
  industrial_or_homemade?: string = '';
  what_petfood?: string = '';
}

export class StepPyodermatitis {
  pyodermatitis?: boolean = null;
  pyodermatitis_history?: boolean = null
}

export class StepMalassezia {
  malassezia?: boolean = null;
  malassezia_history?: boolean = null
}

export class StepOtitis {
  recurring_otitis?: boolean = null;
  otitis?: boolean = null;
  otitis_history?: boolean = null;
}

export class StepDesensitized {
  desensitized?: boolean = null;
  desensitized_more_6_months?: boolean = null;
}

export class StepDrugsHistory {
  drug_history_known?: boolean = null;
  prednisolone?: number = 0;
  oclacitinib?: number = 0;
  cyclosporine?: number = 0;
  cortavance?: number = 0;
  antibacterial_shampoo?: number = 0;
  dermatologic_shampoo?: number = 0;
  omega?: number = 0;
  yeast?: number = 0;
}

export class StepName {
  name?: string = '';
}

export class StepAge {
  age?: string = '';
}

export class StepBreed {
  crossed?: number = 0;
  breed_dog_pure?: string = '';
  breed_dog_1?: string = '';
  breed_dog_2?: string = '';
  dog_format?: string = '';
}

export class StepGender {
  gender?: string = '';
}

export class StepSex {
  sexual_capacity?: string = '';
}

export class StepPhysical {
  physical_activity?: string = '';
}

export class StepWeight {
  weight?: number = 0;
}

export class StepFat {
  fat_score_dog?: number = 0;
}

export class StepOwnerInformations {
  owner_name?: string = '';
  owner_phone?: string = '';
  owner_email?: string = '';
  accept_data_sharing?: boolean = false;
}

export class Login {
  username?: string = '';
  password?: string = '';
}

export class WeightHistory {
  date?: string = '';
  weight?: string = '';
}

export class LoginData {
  username = '';
  password = '';

  clear() {
    this.username = '';
    this.password = '';
  }


}
