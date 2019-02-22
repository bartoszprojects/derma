import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AppComponent} from "./app.component";
import {SmartAtopiaWelcomeComponent} from "./smart-atopia-welcome/smart-atopia-welcome.component";
import {SmartAtopiaComponent} from "./smart-atopia/smart-atopia.component";
import {AddPetComponent} from "./add_pet/add-pet/add-pet.component";
import {StepDisclaimerComponent} from "./add_pet/step-disclaimer/step-disclaimer.component";
import {StepFavrotCriteriaComponent} from "./add_pet/step-favrot-criteria/step-favrot-criteria.component";
import {StepCadesiComponent} from "./add_pet/step-cadesi/step-cadesi.component";
import {StepFleaTreatmentComponent} from "./add_pet/step-flea-treatment/step-flea-treatment.component";
import {StepFoodAllergyComponent} from "./add_pet/step-food-allergy/step-food-allergy.component";
import {StepPyodermatitisComponent} from "./add_pet/step-pyodermatitis/step-pyodermatitis.component";
import {StepMalasseziaComponent} from "./add_pet/step-malassezia/step-malassezia.component";
import {StepOtitsComponent} from "./add_pet/step-otits/step-otits.component";
import {StepDesensitizedComponent} from "./add_pet/step-desensitized/step-desensitized.component";
import {StepDrugsHistoryComponent} from "./add_pet/step-drugs-history/step-drugs-history.component";
import {StepNameComponent} from "./add_pet/step-name/step-name.component";
import {StepAgeComponent} from "./add_pet/step-age/step-age.component";
import {StepBreedComponent} from "./add_pet/step-breed/step-breed.component";
import {StepGenderComponent} from "./add_pet/step-gender/step-gender.component";
import {StepSexComponent} from "./add_pet/step-sex/step-sex.component";
import {StepPhysicalComponent} from "./add_pet/step-physical/step-physical.component";
import {StepWeightComponent} from "./add_pet/step-weight/step-weight.component";
import {StepFatComponent} from "./add_pet/step-fat/step-fat.component";
import {StepOwnerInformationsComponent} from "./add_pet/step-owner-informations/step-owner-informations.component";
import {StepSucessComponent} from "./add_pet/step-sucess/step-sucess.component";

const routes: Routes = [
  {
    path: 'home', component: SmartAtopiaComponent, children: [
      {
        path: 'welcome',
        component: SmartAtopiaWelcomeComponent,
      },
      {
        path: 'add-pet',
        component: AddPetComponent,
        children: [
          {
            path: 'disclaimer',
            component: StepDisclaimerComponent
          },
          {
            path: 'favrot-criteria',
            component: StepFavrotCriteriaComponent
          },
          {
            path: 'cadesi',
            component: StepCadesiComponent
          },
          {
            path: 'flea-treatment',
            component: StepFleaTreatmentComponent
          },
          {
            path: 'food-allergy',
            component: StepFoodAllergyComponent
          },
          {
            path: 'pyodermatitis',
            component: StepPyodermatitisComponent
          },
          {
            path: 'malassezia',
            component: StepMalasseziaComponent
          },
          {
            path: 'otitis',
            component: StepOtitsComponent
          },
          {
            path: 'desensitized',
            component: StepDesensitizedComponent
          },
          {
            path: 'drugs-history',
            component: StepDrugsHistoryComponent
          },
          {
            path: 'name',
            component: StepNameComponent
          },
          {
            path: 'age',
            component: StepAgeComponent
          },
          {
            path: 'breed',
            component: StepBreedComponent
          },
          {
            path: 'gender',
            component: StepGenderComponent
          },
          {
            path: 'sex',
            component: StepSexComponent
          },
          {
            path: 'physical',
            component: StepPhysicalComponent
          },
          {
            path: 'weight',
            component: StepWeightComponent
          },
          {
            path: 'fat',
            component: StepFatComponent
          },
          {
            path: 'owner-informations',
            component: StepOwnerInformationsComponent
          },
          {
            path: 'success',
            component: StepSucessComponent
          }
        ]
      }
    ]
  },

  {path: 'landing', component: LandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
