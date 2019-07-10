import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatExpansionModule} from '@angular/material/expansion';
import {DataService} from '../../data.service';
import {idPetModel} from '../../formData.model';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  route_boolean;
  route_link_next;
  route_link_back;
  panelOpenState = false;
  showFiller = false;
  pets;
  set_color;
  is_clicked = false;
  wchich_id;
  id_pet : idPetModel;
  form: any;
  hide_pet = false;
  set_pet;
  list_of_hidden = [];
  hide_container;
  _: any = _;


  setSelected(index) {
    this.set_color = index;
    this.wchich_id = index;
    this.is_clicked = true;
    this.id_pet.id_number = this.wchich_id;
    this.checkRouteUrl()
  }

  changeContainer(bool) {
    if (bool == 'true') {
      this.hide_container = true;
    }
    if (bool == 'false') {
      this.hide_container = false;
    }
  }

  checkRouteUrl() {
    let splitted_url = this.router.url.split('/');
    console.log(splitted_url);
    if (splitted_url[2] == 'new-physical-consultation') {
      this.route_boolean = 0;
      this.route_link_next = 'new-physical-consultation/update/' + this.wchich_id + '/supporting-diet';
    }
    if (splitted_url[2] == 'new-phone-consultation') {
      this.route_boolean = 1;
      this.route_link_next = 'new-phone-consultation/update/' + this.wchich_id + '/supporting-diet';
    }
     if (splitted_url[2] == 'homemade') {
      this.route_boolean = 2;
      this.route_link_next = 'homemade/update/' + this.wchich_id + '/disclaimer';
    }
     if (splitted_url[2] == 'my-pet-dashboard') {
      this.route_boolean = 3;
    }
  }

  constructor(private router: Router, private formDataService: DataService) {
  }

  ngOnInit() {
    this.id_pet = this.formDataService.getId();
    this.checkRouteUrl();
    this.getDataFromBackend();

  }

  public pieChartLabels: string[] = ["2018-09-09", "2018-09-11"];
   public pieChartData:Array<any> = [
    {data: [65, 159,], label: 'Pet Weight'},

  ];
  public pieChartType: string = 'bar';


  public chartClicked(e: any): void {
    console.log(e);
  }

  getDataFromBackend() {
    this.formDataService.getDataFromBackend().subscribe(result => {
        this.pets = result;
        console.log(this.pets)
      },
      error => {
            this.router.navigate(['/login'])
    })
  };

  putData() {
    this.formDataService.setId(this.id_pet);
  }
  hideSinglePetFromBackend(id) {
    this.formDataService.hideSinglePetFromBackend(id);
    this.router.navigate(['home/new-physical-consultation/pet']);
  }
  hidePet(index) {
    this.hide_pet = true;
    this.set_pet = index;
    this.list_of_hidden.push(index);
    console.log(this.list_of_hidden)
  }


}
