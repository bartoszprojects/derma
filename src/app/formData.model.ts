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
    clear() {
        this.diet_agreed = false;
        this.indoor_dog = false;
        this.pruritus_corticoid = false;
        this.no_lesion_pruritus = false;
        this.front_feet = false;
        this.ear_pinnae = false;
        this.ear_margins = false;
        this.dorso_lumbar = false;
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
    three_years: boolean = false;
    indoor_dog: boolean = false;
    pruritus_corticoid: boolean = false;
    no_lesion_pruritus: boolean = false;
    front_feet: boolean = false;
    ear_pinnae: boolean = false;
    ear_margins: boolean = false;
    dorso_lumbar: boolean = false;
}

