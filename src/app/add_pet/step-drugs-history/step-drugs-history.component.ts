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

  drug_history: StepDrugsHistory;
  form: any;
  profileForm = this.fb.group({
    drug_history_known: [null, Validators.required],
    prednisolone: [null, Validators.required],
    oclacitinib: [null, Validators.required],
    cyclosporine: [null, Validators.required],
    cortavance: [null, Validators.required],
    antibacterial_shampoo: [null, Validators.required],
    dermatologic_shampoo: [null, Validators.required],
    omega: [null, Validators.required],
    yeast: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.DataService.setDrugHistory(this.profileForm.value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.DataService.setDrugHistory(this.profileForm.value);
    console.log(this.DataService.getDrugHistory());

  }

  ngOnInit() {
    this.drug_history = this.DataService.getDrugHistory();
    console.log('Personal feature loaded!');

  }
}
