import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../data.service';


@Component({
  selector: 'app-pet-name',
  templateUrl: './pet-name.component.html',
  styleUrls: ['./pet-name.component.scss']
})
export class PetNameComponent implements OnInit {
  @Input() formData;

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {

    this.formData = this.formDataService.getFormData();

  }

}
