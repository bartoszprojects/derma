import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-step-sucess',
  templateUrl: './step-sucess.component.html',
  styleUrls: ['./step-sucess.component.scss']
})
export class StepSucessComponent implements OnInit {
bartek;
  constructor(private DataService: DataService) {
        this.bartek = this.DataService.getOwnerInformations();

  }

  ngOnInit() {     this.bartek = this.DataService.getOwnerInformations();
  }

}
