import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SmartAtopiaWelcomeComponent } from './smart-atopia-welcome/smart-atopia-welcome.component';
import { SmartAtopiaComponent } from "./smart-atopia/smart-atopia.component";
import { StepDisclaimerComponent } from './add_pet/step-disclaimer/step-disclaimer.component';
import { AddPetComponent } from './add_pet/add-pet/add-pet.component';
import { StepFavrotCriteriaComponent } from './add_pet/step-favrot-criteria/step-favrot-criteria.component';
import { StepCadesiComponent } from './add_pet/step-cadesi/step-cadesi.component';
import { StepFleaTreatmentComponent } from './add_pet/step-flea-treatment/step-flea-treatment.component';
import { StepFoodAllergyComponent } from './add_pet/step-food-allergy/step-food-allergy.component';
import { StepPyodermatitisComponent } from './add_pet/step-pyodermatitis/step-pyodermatitis.component';
import { StepMalasseziaComponent } from './add_pet/step-malassezia/step-malassezia.component';
import { StepOtitsComponent } from './add_pet/step-otits/step-otits.component';
import { StepDesensitizedComponent } from './add_pet/step-desensitized/step-desensitized.component';
import { StepDrugsHistoryComponent } from './add_pet/step-drugs-history/step-drugs-history.component';
import { StepNameComponent } from './add_pet/step-name/step-name.component';
import { StepAgeComponent } from './add_pet/step-age/step-age.component';
import { StepBreedComponent } from './add_pet/step-breed/step-breed.component';
import { StepGenderComponent } from './add_pet/step-gender/step-gender.component';
import { StepSexComponent } from './add_pet/step-sex/step-sex.component';
import { StepPhysicalComponent } from './add_pet/step-physical/step-physical.component';
import { StepWeightComponent } from './add_pet/step-weight/step-weight.component';
import { StepFatComponent } from './add_pet/step-fat/step-fat.component';
import { StepOwnerInformationsComponent } from './add_pet/step-owner-informations/step-owner-informations.component';
import { StepSucessComponent } from './add_pet/step-sucess/step-sucess.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SmartAtopiaWelcomeComponent,
    SmartAtopiaComponent,
    StepDisclaimerComponent,
    AddPetComponent,
    StepFavrotCriteriaComponent,
    StepCadesiComponent,
    StepFleaTreatmentComponent,
    StepFoodAllergyComponent,
    StepPyodermatitisComponent,
    StepMalasseziaComponent,
    StepOtitsComponent,
    StepDesensitizedComponent,
    StepDrugsHistoryComponent,
    StepNameComponent,
    StepAgeComponent,
    StepBreedComponent,
    StepGenderComponent,
    StepSexComponent,
    StepPhysicalComponent,
    StepWeightComponent,
    StepFatComponent,
    StepOwnerInformationsComponent,
    StepSucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
export class PizzaPartyAppModule { }
