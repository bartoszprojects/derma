import {Injectable} from '@angular/core';
import {
  FormData, StepDisclaimer, StepFavrotCriteria, StepCadesi, StepFleaTreatment,
  StepFoodAllergy, StepPyodermatitis, StepMalassezia, StepOtitis,
  StepDesensitized, StepDrugsHistory, StepName, StepAge, StepBreed, StepGender, StepSex, StepPhysical, StepWeight,
  StepFat, StepOwnerInformations, Login, LoginData, idPetModel, Status
} from './formData.model';
import {Observable, Subject, ReplaySubject, timer, from} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs';
import {interval} from 'rxjs';
import {switchMap, map, tap, share, shareReplay} from 'rxjs/operators';
import * as moment from 'moment';
import {post} from 'selenium-webdriver/http';
import {HttpParams} from '@angular/common/http';

const main_url = 'https://api.snv-derma.rootxnet.com';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  access_token;
  drugs_history_data;
  private formData: FormData = new FormData();
  private loginData: LoginData = new LoginData();

  constructor(private http: HttpClient) {
  }

  sendDataToBackend() {
    let data = this.getFormData();

    let now = moment();
    let now_date = moment(now).format('YYYY-MM-DD');
    let date_now = now_date.valueOf();

    let weight_logs_content = {};
    weight_logs_content[date_now] = data.weight;
    let fat_score_logs_content = {};
    fat_score_logs_content[date_now] = data.fat_score_dog;
    let pruritus_score_logs_content = {};
    pruritus_score_logs_content[date_now] = data.pruritus_score;
    let cadesi_total_logs_content = {};
    cadesi_total_logs_content[date_now] = data.total;
    let cadesi_details_logs_content = {};
    cadesi_details_logs_content[date_now] = data.cadesi_details_logs;
    let drug_logs_single_content = {
      'omega': data.omega,
      'yeast': data.yeast,
      'cortavance': data.cortavance,
      'oclacitinib': data.oclacitinib,
      'cyclosporine': data.cyclosporine,
      'prednisolone': data.prednisolone,
      'dermatologic_shampoo': data.dermatologic_shampoo,
      'antibacterial_shampoo': data.antibacterial_shampoo
    };
    let drug_logs_content = {};
    drug_logs_content[date_now] = drug_logs_single_content;

    console.log('§§§§§§§§§§§§');
    console.log(data.breed_dog_pure);
    console.log('§§§§§§§§§§§§');
    var postData = {
      'owner_email': data.owner_email,
      'owner_name': data.owner_name,
      'recruiter_id': 1,
      'recruiter_email': 'admin@example.com',
      'owner_phone': data.owner_phone,
      'pet_name': data.name,
      'breed_1_pure': data.breed_dog_pure,
      'breed_1': data.breed_dog_1,
      'breed_2': data.breed_dog_2,
      'dog_format': data.dog_format,
      'date_logs': {'inclusion_date': date_now},
      'display': 1,
      'gender': data.gender,
      'weight_logs': weight_logs_content,
      'fat_score_logs': fat_score_logs_content,
      'sexual_capacity': data.sexual_capacity,
      'physical_activity': data.physical_activity,
      'favrot_criteria': {
        'ear_pinnae': data.ear_pinnae,
        'front_feet': data.front_feet,
        'indoor_dog': data.indoor_dog,
        'ear_margins': data.ear_margins,
        'three_years': data.three_years,
        'dorso_lumbar': data.dorso_lumbar,
        'no_lesion_pruritus': data.no_lesion_pruritus,
        'pruritus_corticoid': data.pruritus_corticoid
      },
      'pruritus_score_logs': pruritus_score_logs_content,
      'cadesi_total_logs': cadesi_total_logs_content,
      'cadesi_details_logs': cadesi_details_logs_content,
      'drug_logs': drug_logs_content,
      'pyodermatitis_history': data.pyodermatitis_history,
      'otitis_history': data.otitis_history,
      'malassezia_history': data.malassezia_history,
      'age': Number(data.age),
      'accept_data_sharing': data.accept_data_sharing,
      'flea_treatment': data.flea_treatment,
      'exlcusion_diet_food_recipe': 'nbc',
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };

    this.http.post(main_url + '/api/snippets/', postData, httpOptions)
      .subscribe(result => {
        console.log('POST: ', result);
      });
  }

  getDataFromBackend() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get(main_url + '/api/snippets/', httpOptions);
  }

  getRecruiterFromBackend() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get(main_url + '/api/user/', httpOptions);
  }

  getSingleDataFromBackend(id_pet) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get(main_url + '/api/snippets/' + id_pet + '/', httpOptions);
  }

  getBreedDataFromBackend() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get(main_url + '/api/dog-breed-list/', httpOptions);
  }

  getRecipeDataFromBackend() {
    let data = this.getFormData();
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

    const params = new HttpParams()
      .set('id_pet', data.id_number)
      .set('voracious', '1')
      .set('low_carb', '1');

    return this.http.get(main_url + '/api/recipe_derma/', {headers: headers, params: params});
  }

  deleteSinglePetFromBackend() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.delete(main_url + '/api/snippets/d075343f-976e-4b9c-a689-4dd2444a5592/', httpOptions).subscribe(result => {
    });
  }

  hideSinglePetFromBackend(id) {
    var postData = {
      'recruiter_id': 1,
      'recruiter_email': 'admin@example.com',
      'display': false
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };

    this.http.patch(main_url + '/api/snippets/' + id + '/', postData, httpOptions)
      .subscribe(result => {
      });
  }

   putDataToBackend() {
    let data = this.getFormData();

    this.getSingleDataFromBackend(data.id_number).subscribe(result => {

      let now = moment();
      let now_date = moment(now).format("YYYY-MM-DD:hh-mm-ss");
      let date_now = now_date.valueOf();

      let drug_logs_single_content = {
        'cortavance': data.cortavance,
        'oclacitinib': data.oclacitinib,
        'cyclosporine': data.cyclosporine,
        'prednisolone': data.prednisolone,
        'dermatologic_shampoo': data.dermatologic_shampoo,
        'antibacterial_shampoo': data.antibacterial_shampoo
      };
      let drug_logs_content = {};
      drug_logs_content = result['drug_logs'];
      drug_logs_content[date_now.toString()] = drug_logs_single_content;
      this.drugs_history_data = drug_logs_content;
      console.log('drugs_history_data', this.drugs_history_data);

      let weight_logs_content = {};
      weight_logs_content = result['weight_logs'];
      weight_logs_content[date_now.toString()] = data.weight;
      let fat_score_logs_content = {};
      fat_score_logs_content = result['fat_score_logs'];
      fat_score_logs_content[date_now.toString()] = data.fat_score_dog;
      let pruritus_score_logs_content = {};
      pruritus_score_logs_content = result['pruritus_score_logs'];
      pruritus_score_logs_content[date_now.toString()] = data.pruritus_score;
      let cadesi_total_logs_content = {};
      cadesi_total_logs_content = result['cadesi_total_logs'];
      cadesi_total_logs_content[date_now.toString()] = data.total;
      let cadesi_details_logs_content = {};
      cadesi_details_logs_content = result['cadesi_details_logs'];
      cadesi_details_logs_content[date_now.toString()] = data.cadesi_details_logs;

      var postData = {
        'recruiter_id': 1,
        'recruiter_email': 'admin@example.com',
        'id': data.id_number,
        'weight_logs': weight_logs_content,
        'flea_treatment': data.flea_treatment,
        'pruritus_score_logs': pruritus_score_logs_content,
        'cadesi_total_logs': cadesi_total_logs_content,
        'cadesi_details_logs': cadesi_details_logs_content,
        'drug_logs': this.drugs_history_data,
        'fat_score_logs': fat_score_logs_content,
        'exclusion_reason': data.exclusion_reason
      };

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        })
      };

      this.http.patch(main_url + '/api/snippets/' + data.id_number + '/', postData, httpOptions)
        .subscribe(result => {
        });

    });


  }

  getId(): idPetModel {
    var idpet: idPetModel = {
      id_number: this.formData.id_number
    };
    return idpet;
  }

  setId(data: idPetModel) {
    this.formData.id_number = data.id_number;
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
    var flea: StepFleaTreatment = {
      flea_allergy_excluded: this.formData.flea_allergy_excluded,
      flea_treatment: this.formData.flea_treatment,
    };
    return flea;
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
      breed_dog_pure: this.formData.breed_dog_pure,
      breed_dog_1: this.formData.breed_dog_1,
      breed_dog_2: this.formData.breed_dog_2,
      dog_format: this.formData.dog_format,
    };
    return breed;
  }

  setBreed(data: StepBreed) {
    this.formData.crossed = data.crossed;
    this.formData.breed_dog_pure = data.breed_dog_pure;
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

  getStatus(): Status {
    var status_form: Status = {
      exclusion_reason: this.formData.exclusion_reason,
    };
    return status_form;
  }

  setStatus(data: Status) {
    this.formData.exclusion_reason = data.exclusion_reason;
  }

  sendLoginToBackend(username, password) {

    const payload = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('client_id', '0sVIx5DyqViweLdFnxIqClfY5DxKHGlaxCon9fM1')
      .set('client_secret', 'bjtdtJq61lgdAWFGSCziNSM0Rm09uC27Ig3Xi8DhZEpKVuaHkZK3Y8AYlx8ZwWyjvbN1prxsQOCIYjwjXdG45f8A8zRbfH8XQvIKoSgXRBDwJXCzKf699cU11eHJho16')
      .set('scope', 'read write')
      .set('grant_type', 'password');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    return this.http.post(main_url + '/o/token/', payload, httpOptions);

  }

  getFormData(): FormData {
    // Return the entire Form Data
    console.log('from DataService:');
    console.log(this.formData);
    return this.formData;
  }

  clearFormData(): any {
    return this.formData.clear();
  }

}
