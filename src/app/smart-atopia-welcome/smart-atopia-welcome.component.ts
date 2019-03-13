import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-smart-atopia-welcome',
  templateUrl: './smart-atopia-welcome.component.html',
  styleUrls: ['./smart-atopia-welcome.component.scss']
})
export class SmartAtopiaWelcomeComponent implements OnInit {
  mouse_tab;
  main_tabs = [
    {
      id: 1,
      icon: "glyphicon glyphicon-dashboard",
      url: '',
      title: "My Pets Dashboard",
      desc_title: "Manage the pet you included in the study",
      desc_desc: "Access those pet's profile"
    },
    {
      id: 2,
      icon: "fa fa-plus",
      url: "/home/add-pet/disclaimer",
      title: "Include a new Pet",
      desc_title: "Include an atopic dog",
      desc_desc: "Click on the cross to add a pet to UZH's study!"
    },
    {
      id: 3,
      icon: "fa fa-stethoscope",
      url: '/home/new-physical-consultation/pet',
      title: 'New Physical Consultation',
      desc_title: "Add a physical consultation",
      desc_desc: "Follow up Consultation"
    },
    {
      id: 4,
      icon: "fa fa-phone",
      url: '/home/new-phone-consultation/pet',
      title: 'New Phone Consultation',
      desc_title: "Add a Telephone consultation",
      desc_desc: "Follow up by Telephone"
    },
    {
      id: 5,
      icon: "fa fa-cutlery",
      url: '/home/homemade/pet',
      title: 'DermatologiC Homemade Diet',
      desc_title: "Design a tailor-made dermatologic recipe",
      desc_desc: "This diet will be specifically enriched in nutrients to improve the candidate's skin conditione"
    }

  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
     let check_local_token = localStorage.getItem('access_token');
     console.log('check token', check_local_token);
     if (!check_local_token) {
       this.router.navigate(['/login']);
     }
  }
}
