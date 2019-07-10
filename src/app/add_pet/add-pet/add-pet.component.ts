import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  constructor(private formDataService: DataService) { }

  ngOnInit() {
    this.formDataService.clearFormData()
  }

}
