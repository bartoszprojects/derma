import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StepDisclaimer} from '../../formData.model';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-step-disclaimer',
  templateUrl: './step-disclaimer.component.html',
  styleUrls: ['./step-disclaimer.component.scss']
})

export class StepDisclaimerComponent implements OnInit {
  title = 'Please tell us about yourself.';
  disclaimer: StepDisclaimer;
  form: any;
  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.disclaimer = this.formDataService.getDisclaimer();
    console.log('Personal feature loaded!');
  }


  save() {
    this.formDataService.setDisclaimer(this.disclaimer);
    return true;
  }


}








