import {Injectable} from '@angular/core';
import {
  FormData, StepDisclaimer, StepFavrotCriteria, StepCadesi, StepFleaTreatment,
  StepFoodAllergy, StepPyodermatitis, StepMalassezia, StepOtitis,
  StepDesensitized, StepDrugsHistory, StepName, StepAge, StepBreed, StepGender, StepSex, StepPhysical, StepWeight,
  StepFat, StepOwnerInformations, Login, LoginData
} from './formData.model';
import {Observable, Subject, ReplaySubject, timer, from} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs';
import {interval} from 'rxjs';
import {switchMap, map, tap, share, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: FormData = new FormData();
  private loginData: LoginData = new LoginData();

  constructor(private http: HttpClient) {
  }


  sendDataToBackend() {
    let data = this.getFormData();



    var postData = {
        "owner_email": data.owner_email,
        "owner_name": data.owner_name,
        "recruiter_id": 1,
        "recruiter_email": "admin@example.com",
        "owner_phone": data.owner_phone,
        "pet_name": data.name,
        "breed_dog_1_pure": null,
        "breed_dog_1": data.breed_dog_1,
        "breed_dog_2": data.breed_dog_2,
        "dog_format": data.dog_format,
        "date_logs": {
            "inclusion_date": "2019-03-04"
        },
        "display": 1,
        "gender": data.gender,
        "weight_logs": {
            "2019-03-04": 53.5
        },
        "fat_score_logs": {
            "2019-03-04": "5"
        },
        "sexual_capacity": data.sexual_capacity,
        "physical_activity": data.physical_activity,

        "favrot_criteria": {
            "ear_pinnae": data.ear_pinnae,
            "front_feet": data.front_feet,
            "indoor_dog": data.indoor_dog,
            "ear_margins": data.ear_margins,
            "three_years": data.three_years,
            "dorso_lumbar": data.dorso_lumbar,
            "no_lesion_pruritus": data.no_lesion_pruritus,
            "pruritus_corticoid": data.pruritus_corticoid
        },
        "pruritus_score_logs": data.pruritus_score,
        "cadesi_total_logs": data.total,
        "cadesi_details_logs": data.cadesi_details_logs
        ,
        "drug_logs": {
                "omega": data.omega,
                "yeast": data.yeast,
                "cortavance": data.cortavance,
                "oclacitinib": data.oclacitinib,
                "cyclosporine": data.cyclosporine,
                "prednisolone": data.prednisolone,
                "dermatologic_shampoo": data.dermatologic_shampoo,
                "antibacterial_shampoo": data.antibacterial_shampoo
        },
        "pyodermatitis_history": data.pyodermatitis_history,
        "otitis_history": data.otitis_history,
        "malassezia_history": data.malassezia_history,
        "age": Number(data.age),
        "accept_data_sharing": data.accept_data_sharing,
        "flea_treatment":  data.flea_treatment,
        "exclusion_diet": data.flea_allergy_excluded,
        "exlcusion_diet_food_recipe": "nbc"
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    this.http.post('http://127.0.0.1:8001/snippets/', postData, httpOptions)
      .subscribe(result => {
        console.log('FROOM POSSTTT: ', result)
      });
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
      cadesi_details_logs: this.formData.cadesi_details_logs,
      total: this.formData.total,
      pruritus_score: this.formData.pruritus_score
    };
    return cadesi;
  }

  setCadesi(data: StepCadesi) {
    this.formData.cadesi_details_logs = data.cadesi_details_logs;
    this.formData.total = data.total;
    this.formData.pruritus_score = data.pruritus_score;
  }

  getFleaTreatment(): StepFleaTreatment {
    var flea_treatment: StepFleaTreatment = {
      flea_allergy_excluded: this.formData.flea_allergy_excluded,
      flea_treatment: this.formData.flea_treatment,
    };
    return flea_treatment;
  }

  setFleaTreatment(data: StepFleaTreatment) {
    this.formData.flea_allergy_excluded = data.flea_allergy_excluded;
    this.formData.flea_treatment = data.flea_treatment;
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
      age: this.formData.age,
    };
    return age;
  }

  setAge(data: StepAge) {
    this.formData.age = data.age;

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
      sexual_capacity: this.formData.sexual_capacity,
    };
    return sex;
  }

  setSex(data: StepSex) {
    this.formData.sexual_capacity = data.sexual_capacity;
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

  getLogin(): Login {
    var login: Login = {
      username: this.loginData.username,
      password: this.loginData.password,
    };
    return login;
  }

  setLogin(data: Login) {
    this.loginData.username = data.username;
    this.loginData.password = data.password;
  }

  getLoginForm(): LoginData {
    return this.loginData;
  }

    sendLoginToBackend() {
    var postData = {
      username: 'snv',
      password: 'snv',

    };

    let headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

    headers.append('responseType', 'text');
    headers.append('Authorization', 'Bearer ' + 'oRJVuwLHlmsSSTnA0xiQrHoD0xKB95NuODCzXU3Ncc5nDxdaca4suVgtZOt7D5WS');

    this.http.post('http://127.0.0.1:8001/login/', postData,{ responseType: 'text' as 'json' })
      .subscribe(result => {
        console.log('FROM LOGIN: ', result)
      });
  }

  getFormData(): FormData {
    // Return the entire Form Data
    console.log('from DataService:');
    console.log(this.formData);
    return this.formData;
  }


}

