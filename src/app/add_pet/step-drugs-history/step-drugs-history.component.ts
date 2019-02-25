import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {StepDrugsHistory} from '../../formData.model';

@Component({
  selector: 'app-step-drugs-history',
  templateUrl: './step-drugs-history.component.html',
  styleUrls: ['./step-drugs-history.component.scss']
})
export class StepDrugsHistoryComponent implements OnInit {

  drug_history_form: StepDrugsHistory;
  form: any;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.drug_history_form = this.formDataService.getDrugHistory();
    console.log('Personal feature loaded!');
  }

  save() {
    this.formDataService.setDrugHistory(this.drug_history_form);
    return true;
  }
}
