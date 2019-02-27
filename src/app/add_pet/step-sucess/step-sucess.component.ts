import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../data.service';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-step-sucess',
  templateUrl: './step-sucess.component.html',
  styleUrls: ['./step-sucess.component.scss']
})
export class StepSucessComponent implements OnInit {

  @Input() formData;

  constructor(private DataService: DataService) {
  }

  ngOnInit() {
    this.formData = this.DataService.getFormData();
    this.DataService.sendDataToBackend();
    console.log(this.formData)
  }


}
