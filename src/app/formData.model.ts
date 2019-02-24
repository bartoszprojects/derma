export class FormData {
  diet_agreed = false;
  three_years = false;
  indoor_dog = false;
  pruritus_corticoid = false;
  no_lesion_pruritus = false;
  front_feet = false;
  ear_pinnae = false;
  ear_margins = false;
  dorso_lumbar = false;
  Perilabial_Area = '';
  Left_Medial_Pinna = '';
  Right_Medial_Pinna = '';
  Left_Axilla = '';
  Right_Axilla = '';
  Left_Front_Paw = '';
  Right_Front_Paw = '';
  Left_Hind_Paw = '';
  Right_Hind_Paw = '';
  Left_Cubital_Flexor = '';
  Right_Cubital_Flexor = '';
  Left_Palmar_Metacarpal = '';
  Right_Palmar_Metacarpal = '';
  Left_Flank = '';
  Right_Flank = '';
  Left_Inguinal_Aera = '';
  Right_Inguinal_Aera = '';
  Abdomen = '';
  Perineum = '';
  Ventral_Tail = '';
  total = 0;
  flea_allergy_excluded = false;
  flea_product = 0;
  excluded = false;
  more_8_weeks = false;
  industrial_or_homemade = '';
  what_petfood = '';
  pyodermatitis = false;
  pyodermatitis_history = false;
  malassezia = false;
  malassezia_history = false;
  recurring_otitis = false;
  otitis = false;
  otitis_history = false;
  desensitized = false;
  desensitized_more_6_months  = false;
  drug_history_known = false;
  prednisolone = 0;
  oclacitinib = 0;
  cyclosporine = 0;
  cortavance = 0;
  antibacterial_shampoo = 0;
  dermatologic_shampoo = 0;
  omega = 0;
  yeast = 0;
  name = '';
  age_year = '';
  age_month = '';
  crossed = 0;
  breed_dog_1 = '';
  breed_dog_2 ='';
  dog_format = 0;
  gender = 0;
  sex = 0;
  physical_activity = 0;
  weight = 0;

  clear() {
    this.diet_agreed = false;
    this.indoor_dog = false;
    this.pruritus_corticoid = false;
    this.no_lesion_pruritus = false;
    this.front_feet = false;
    this.ear_pinnae = false;
    this.ear_margins = false;
    this.dorso_lumbar = false;
    this.Perilabial_Area = '';
    this.Left_Medial_Pinna = '';
    this.Right_Medial_Pinna = '';
    this.Left_Axilla = '';
    this.Right_Axilla = '';
    this.Left_Front_Paw = '';
    this.Right_Front_Paw = '';
    this.Left_Hind_Paw = '';
    this.Right_Hind_Paw = '';
    this.Left_Cubital_Flexor = '';
    this.Right_Cubital_Flexor = '';
    this.Left_Palmar_Metacarpal = '';
    this.Right_Palmar_Metacarpal = '';
    this.Left_Flank = '';
    this.Right_Flank = '';
    this.Left_Inguinal_Aera = '';
    this.Right_Inguinal_Aera = '';
    this.Abdomen = '';
    this.Perineum = '';
    this.Ventral_Tail = '';
    this.total = 0;
    this.flea_allergy_excluded = false;
    this.flea_product = 0;
    this.excluded = false;
    this.more_8_weeks = false;
    this.industrial_or_homemade = '';
    this.what_petfood = '';
    this.pyodermatitis = false;
    this.pyodermatitis_history = false;
    this.malassezia = false;
    this.malassezia_history = false;
    this.recurring_otitis = false;
    this.otitis = false;
    this.otitis_history = false;
    this.desensitized = false;
    this.desensitized_more_6_months  = false;
    this.drug_history_known = false;
    this.prednisolone = 0;
    this.oclacitinib = 0;
    this.cyclosporine = 0;
    this.cortavance = 0;
    this.antibacterial_shampoo = 0;
    this.dermatologic_shampoo = 0;
    this.omega = 0;
    this.yeast = 0;
    this.name = '';
    this.age_year = '';
    this.age_month = '';
    this.crossed = 0;
    this.breed_dog_1 = '';
    this.breed_dog_2 ='';
    this.dog_format = 0;
    this.gender = 0;
    this.sex = 0;
    this.physical_activity = 0;
    this.weight = 0;
  }
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
  Perilabial_Area: string = '';
  Left_Medial_Pinna: string = '';
  Right_Medial_Pinna: string = '';
  Left_Axilla: string = '';
  Right_Axilla: string = '';
  Left_Front_Paw: string = '';
  Right_Front_Paw: string = '';
  Left_Hind_Paw: string = '';
  Right_Hind_Paw: string = '';
  Left_Cubital_Flexor: string = '';
  Right_Cubital_Flexor: string = '';
  Left_Palmar_Metacarpal: string = '';
  Right_Palmar_Metacarpal: string = '';
  Left_Flank: string = '';
  Right_Flank: string = '';
  Left_Inguinal_Aera: string = '';
  Right_Inguinal_Aera: string = '';
  Abdomen: string = '';
  Perineum: string = '';
  Ventral_Tail: string = '';
  total: number = 0;
}

export class StepFleaTreatment {
  flea_allergy_excluded: boolean = false;
  flea_product: number = 0;
}

export class StepFoodAllergy {
  excluded: boolean = false;
  more_8_weeks: boolean = false;
  industrial_or_homemade: string = '';
  what_petfood: string = '';
}

export class StepPyodermatitis {
  pyodermatitis: boolean = false;
  pyodermatitis_history: boolean = false
}

export class StepMalassezia {
  malassezia: boolean = false;
  malassezia_history: boolean = false
}

export class StepOtitis {
  recurring_otitis: boolean = false;
  otitis: boolean = false;
  otitis_history: boolean = false;
}

export class StepDesensitized {
  desensitized: boolean = false;
  desensitized_more_6_months : boolean = false;
}

export class StepDrugsHistory {
  drug_history_known : boolean = false;
  prednisolone : number = 0;
  oclacitinib : number = 0;
  cyclosporine : number = 0;
  cortavance : number  = 0;
  antibacterial_shampoo : number = 0;
  dermatologic_shampoo : number = 0;
  omega : number = 0;
  yeast : number = 0;
}

export class StepName {
  name : string = '';
}

export class StepAge {
  age_year : string = '';
  age_month : string = '';
}

export class StepBreed {
  crossed : number = 0;
  breed_dog_1 : string = '';
  breed_dog_2: string = '';
  dog_format  : number = 0;
}

export class StepGender {
  gender: number = 0;
}

export class StepSex {
  sex: number = 0;
}

export class StepPhysical {
  physical_activity : number = 0;
}

export class StepWeight {
  weight : number = 0;
}
