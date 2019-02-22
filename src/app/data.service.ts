import {Injectable} from '@angular/core';
import {FormData, StepDisclaimer, StepFavrotCriteria} from './formData.model';


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


  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }
}
