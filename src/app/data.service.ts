import {Injectable} from '@angular/core';
import {
  FormData, StepDisclaimer, StepFavrotCriteria, StepCadesi, StepFleaTreatment,
  StepFoodAllergy, StepPyodermatitis, StepMalassezia, StepOtitis,
  StepDesensitized, StepDrugsHistory, StepName, StepAge, StepBreed, StepGender, StepSex, StepPhysical, StepWeight,
  StepFat, StepOwnerInformations
} from './formData.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: FormData = new FormData();

  constructor() {
  }

  getDisclaimer(): StepDisclaimer {
    var disclaimer: StepDisclaimer = {
      diet_agreed: this.formData.diet_agreed,

    };
    return disclaimer;
  }

  setDisclaimer(data: StepDisclaimer) {
    this.formData.diet_agreed = data.diet_agreed;
  }


  getFavrotCriteria(): StepFavrotCriteria {
    var favrot_criteria: StepFavrotCriteria = {
      three_years: this.formData.three_years,
      indoor_dog: this.formData.indoor_dog,
      pruritus_corticoid: this.formData.pruritus_corticoid,
      no_lesion_pruritus: this.formData.no_lesion_pruritus,
      front_feet: this.formData.front_feet,
      ear_pinnae: this.formData.ear_pinnae,
      ear_margins: this.formData.ear_margins,
      dorso_lumbar: this.formData.dorso_lumbar,

    };
    return favrot_criteria;
  }

  setFavrotCriteria(data: StepFavrotCriteria) {
    this.formData.three_years = data.three_years;
    this.formData.indoor_dog = data.indoor_dog;
    this.formData.pruritus_corticoid = data.pruritus_corticoid;
    this.formData.no_lesion_pruritus = data.no_lesion_pruritus;
    this.formData.front_feet = data.front_feet;
    this.formData.ear_pinnae = data.ear_pinnae;
    this.formData.ear_margins = data.ear_margins;
    this.formData.dorso_lumbar = data.dorso_lumbar;
  }

  getCadesi(): StepCadesi {
    var cadesi: StepCadesi = {
      Perilabial_Area: this.formData.Perilabial_Area,
      Left_Medial_Pinna: this.formData.Left_Medial_Pinna,
      Right_Medial_Pinna: this.formData.Right_Medial_Pinna,
      Left_Axilla: this.formData.Left_Axilla,
      Right_Axilla: this.formData.Right_Axilla,
      Left_Front_Paw: this.formData.Left_Front_Paw,
      Right_Front_Paw: this.formData.Right_Front_Paw,
      Left_Hind_Paw: this.formData.Left_Hind_Paw,
      Right_Hind_Paw: this.formData.Right_Hind_Paw,
      Left_Cubital_Flexor: this.formData.Left_Cubital_Flexor,
      Right_Cubital_Flexor: this.formData.Right_Cubital_Flexor,
      Left_Palmar_Metacarpal: this.formData.Left_Palmar_Metacarpal,
      Right_Palmar_Metacarpal: this.formData.Right_Palmar_Metacarpal,
      Left_Flank: this.formData.Left_Flank,
      Right_Flank: this.formData.Right_Flank,
      Left_Inguinal_Aera: this.formData.Left_Inguinal_Aera,
      Right_Inguinal_Aera: this.formData.Right_Inguinal_Aera,
      Abdomen: this.formData.Abdomen,
      Perineum: this.formData.Perineum,
      Ventral_Tail: this.formData.Ventral_Tail,
      total: this.formData.total,
      pruritus_score : this.formData.pruritus_score
    };
    return cadesi;
  }

  setCadesi(data: StepCadesi) {
    this.formData.Perilabial_Area = data.Perilabial_Area;
    this.formData.Left_Medial_Pinna = data.Left_Medial_Pinna;
    this.formData.Right_Medial_Pinna = data.Right_Medial_Pinna;
    this.formData.Left_Axilla = data.Left_Axilla;
    this.formData.Right_Axilla = data.Right_Axilla;
    this.formData.Left_Front_Paw = data.Left_Front_Paw;
    this.formData.Right_Front_Paw = data.Right_Front_Paw;
    this.formData.Left_Hind_Paw = data.Left_Hind_Paw;
    this.formData.Right_Hind_Paw = data.Right_Hind_Paw;
    this.formData.Left_Cubital_Flexor = data.Left_Cubital_Flexor;
    this.formData.Right_Cubital_Flexor = data.Right_Cubital_Flexor;
    this.formData.Left_Palmar_Metacarpal = data.Left_Palmar_Metacarpal;
    this.formData.Right_Palmar_Metacarpal = data.Right_Palmar_Metacarpal;
    this.formData.Left_Flank = data.Left_Flank;
    this.formData.Right_Flank = data.Right_Flank;
    this.formData.Left_Inguinal_Aera = data.Left_Inguinal_Aera;
    this.formData.Right_Inguinal_Aera = data.Right_Inguinal_Aera;
    this.formData.Abdomen = data.Abdomen;
    this.formData.Perineum = data.Perineum;
    this.formData.Ventral_Tail = data.Ventral_Tail;
    this.formData.total = data.total;
    this.formData.pruritus_score = data.pruritus_score;
  }

  getFleaTreatment(): StepFleaTreatment {
    var flea_treatment: StepFleaTreatment = {
      flea_allergy_excluded: this.formData.flea_allergy_excluded,
      flea_product: this.formData.flea_product,
    };
    return flea_treatment;
  }

  setFleaTreatment(data: StepFleaTreatment) {
    this.formData.flea_allergy_excluded = data.flea_allergy_excluded;
    this.formData.flea_product = data.flea_product;
  }

  getFoodAllergy(): StepFoodAllergy {
    var food_allergy: StepFoodAllergy = {
      excluded: this.formData.excluded,
      more_8_weeks: this.formData.more_8_weeks,
      industrial_or_homemade: this.formData.industrial_or_homemade,
      what_petfood: this.formData.what_petfood,
    };
    return food_allergy;
  }

  setFoodAllergy(data: StepFoodAllergy) {
    this.formData.excluded = data.excluded;
    this.formData.more_8_weeks = data.more_8_weeks;
    this.formData.industrial_or_homemade = data.industrial_or_homemade;
    this.formData.what_petfood = data.what_petfood;
  }

  getPyodermatitis(): StepPyodermatitis {
    var pyodermatitis: StepPyodermatitis = {
      pyodermatitis: this.formData.pyodermatitis,
      pyodermatitis_history: this.formData.pyodermatitis_history,
    };
    return pyodermatitis;
  }

  setPyodermatitis(data: StepPyodermatitis) {
    this.formData.pyodermatitis = data.pyodermatitis;
    this.formData.pyodermatitis_history = data.pyodermatitis_history;
  }

  getMalassezia(): StepMalassezia {
    var malassezia: StepMalassezia = {
      malassezia: this.formData.malassezia,
      malassezia_history: this.formData.malassezia_history,
    };
    return malassezia;
  }

  setMalassezia(data: StepMalassezia) {
    this.formData.malassezia = data.malassezia;
    this.formData.malassezia_history = data.malassezia_history;
  }

  getOtitis(): StepOtitis {
    var otitis: StepOtitis = {
      recurring_otitis: this.formData.recurring_otitis,
      otitis: this.formData.otitis,
      otitis_history: this.formData.otitis_history,
    };
    return otitis;
  }

  setOtitis(data: StepOtitis) {
    this.formData.recurring_otitis = data.recurring_otitis;
    this.formData.otitis = data.otitis;
    this.formData.otitis_history = data.otitis_history;
  }

  getDesensitized(): StepDesensitized {
    var desensitized: StepDesensitized = {
      desensitized: this.formData.desensitized,
      desensitized_more_6_months: this.formData.desensitized_more_6_months,
    };
    return desensitized;
  }

  setDesensitized(data: StepDesensitized) {
    this.formData.desensitized = data.desensitized;
    this.formData.desensitized_more_6_months = data.desensitized_more_6_months;
  }

  getDrugHistory(): StepDrugsHistory {
    var drug_history: StepDrugsHistory = {
      drug_history_known: this.formData.drug_history_known,
      prednisolone: this.formData.prednisolone,
      oclacitinib: this.formData.oclacitinib,
      cyclosporine: this.formData.cyclosporine,
      cortavance: this.formData.cortavance,
      antibacterial_shampoo: this.formData.antibacterial_shampoo,
      dermatologic_shampoo: this.formData.dermatologic_shampoo,
      omega: this.formData.omega,
      yeast: this.formData.yeast,
    };
    return drug_history;
  }

  setDrugHistory(data: StepDrugsHistory) {
    this.formData.drug_history_known = data.drug_history_known;
    this.formData.prednisolone = data.prednisolone;
    this.formData.prednisolone = data.prednisolone;
    this.formData.oclacitinib = data.oclacitinib;
    this.formData.cyclosporine = data.cyclosporine;
    this.formData.cortavance = data.cortavance;
    this.formData.antibacterial_shampoo = data.antibacterial_shampoo;
    this.formData.dermatologic_shampoo = data.dermatologic_shampoo;
    this.formData.omega = data.omega;
    this.formData.yeast = data.yeast;
  }

  getName(): StepName {
    var name: StepName = {
      name: this.formData.name,
    };
    return name;
  }

  setName(data: StepName) {
    this.formData.name = data.name;
  }

  getAge(): StepAge {
    var age: StepAge = {
      age_year: this.formData.age_year,
      age_month: this.formData.age_month,
    };
    return age;
  }

  setAge(data: StepAge) {
    this.formData.age_year = data.age_year;
    this.formData.age_month = data.age_month;
  }

  getBreed(): StepBreed {
    var breed: StepBreed = {
      crossed: this.formData.crossed,
      breed_dog_1: this.formData.breed_dog_1,
      breed_dog_2: this.formData.breed_dog_2,
      dog_format: this.formData.dog_format,
    };
    return breed;
  }

  setBreed(data: StepBreed) {
    this.formData.crossed = data.crossed;
    this.formData.breed_dog_1 = data.breed_dog_1;
    this.formData.breed_dog_2 = data.breed_dog_2;
    this.formData.dog_format = data.dog_format;
  }

  getGender(): StepGender {
    var gender: StepGender = {
      gender: this.formData.gender,
    };
    return gender;
  }

  setGender(data: StepGender) {
    this.formData.gender = data.gender;
  }

  getSex(): StepSex {
    var sex: StepSex = {
      sex: this.formData.sex,
    };
    return sex;
  }

  setSex(data: StepSex) {
    this.formData.sex = data.sex;
  }

  getPhysical(): StepPhysical {
    var physical: StepPhysical = {
      physical_activity: this.formData.physical_activity,
    };
    return physical;
  }

  setPhysical(data: StepPhysical) {
    this.formData.physical_activity = data.physical_activity;
  }

  getWeight(): StepWeight {
    var weight: StepWeight = {
      weight: this.formData.weight,
    };
    return weight;
  }

  setWeight(data: StepWeight) {
    this.formData.weight = data.weight;
  }

  getFat(): StepFat {
    var fat: StepFat = {
      fat_score_dog: this.formData.fat_score_dog,
    };
    return fat;
  }

  setFat(data: StepFat) {
    this.formData.fat_score_dog = data.fat_score_dog;
  }

  getOwnerInformations(): StepOwnerInformations {
    var owner_informations: StepOwnerInformations = {
      owner_name: this.formData.owner_name,
      owner_phone: this.formData.owner_phone,
      owner_email: this.formData.owner_email,
      accept_data_sharing: this.formData.accept_data_sharing,
    };
    return owner_informations;
  }

  setOwnerInformations(data: StepOwnerInformations) {
    this.formData.owner_name = data.owner_name;
    this.formData.owner_phone = data.owner_phone;
    this.formData.owner_email = data.owner_email;
    this.formData.accept_data_sharing = data.accept_data_sharing;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    console.log('from DataService:');
    console.log(this.formData);
    return this.formData;
  }










}

