import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StepDisclaimer } from '../../formData.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-step-disclaimer',
  templateUrl: './step-disclaimer.component.html',
  styleUrls: ['./step-disclaimer.component.scss']
})

export class StepDisclaimerComponent implements OnInit {
  title = 'Please tell us about yourself.';
  disclaimer: StepDisclaimer;
  form: any;

  profileForm = this.fb.group({
    diet_agreed: ['', Validators.required],

  });

  constructor(private fb: FormBuilder, private DataService: DataService) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value.diet_agreed);
     this.DataService.setDisclaimer(this.profileForm.value);
     console.log(this.DataService.getDisclaimer())
  }

  ngOnInit() {
    this.disclaimer = this.DataService.getDisclaimer();
        console.log('Personal feature loaded!');
  }
}
