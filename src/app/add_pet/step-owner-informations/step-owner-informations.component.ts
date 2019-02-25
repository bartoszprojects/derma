import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {StepOwnerInformations} from '../../formData.model';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-step-owner-informations',
  templateUrl: './step-owner-informations.component.html',
  styleUrls: ['./step-owner-informations.component.scss']
})
export class StepOwnerInformationsComponent implements OnInit {
  title = 'Please tell us about yourself.';
  owner_informations_form: StepOwnerInformations;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.owner_informations_form = this.formDataService.getOwnerInformations();
    console.log('Personal feature loaded!');
  }
  save() {
    this.formDataService.setOwnerInformations(this.owner_informations_form);
    return true;
  }
}
