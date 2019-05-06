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
      url: '/home/my-pet-dashboard',
      title: "Mes animaux inclus",
      desc_title: "Aperçu des animaux que vous avez inclus dans l'étude",
      desc_desc: "Accès aux profiles des animaux inclus"
    },
    {
      id: 2,
      icon: "fa fa-plus",
      url: "/home/add-pet/disclaimer",
      title: "Inclure un nouvel animal",
      desc_title: "Inclure un chien atopique",
      desc_desc: "Cliquer sur la croix pour inclure un nouvel animal dans l'étude"
    },
    {
      id: 3,
      icon: "fa fa-stethoscope",
      url: '/home/new-physical-consultation/pet',
      title: 'Nouvelle consultation physique',
      desc_title: "Renseigner les données d'une nouvelle consultation physique",
      desc_desc: "Consultation de suivi"
    },
    {
      id: 4,
      icon: "fa fa-phone",
      url: '/home/new-phone-consultation/pet',
      title: 'Nouvelle Consultation à distance (tel/mail)',
      desc_title: "Renseigner les données d'une nouvelle consultation téléphonique",
      desc_desc: "Consultation de suivi à distance (tel/mail)"
    },
    {
      id: 5,
      icon: "fa fa-cutlery",
      url: '/home/homemade/pet',
      title: 'Ration ménagère dermatologique',
      desc_title: "Ration ménagère complète et équilibre à objectifs dermatologiques",
      desc_desc: "Cette ration sera enrichie en nutriments particuliers pour améliorer la prise en charge de l'atopie"
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
