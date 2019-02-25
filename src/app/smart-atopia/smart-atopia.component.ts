import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-smart-atopia',
  templateUrl: './smart-atopia.component.html',
  styleUrls: ['./smart-atopia.component.scss']
})
export class SmartAtopiaComponent implements OnInit {
  @Input() formData;

    constructor(private DataService: DataService) {
    }

  ngOnInit() {
      this.formData = this.DataService.getFormData();
  }

}
