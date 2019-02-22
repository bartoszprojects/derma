import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";



@Component({
  selector: 'app-smart-atopia-welcome',
  templateUrl: './smart-atopia-welcome.component.html',
  styleUrls: ['./smart-atopia-welcome.component.scss']
})
export class SmartAtopiaWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  showChildValue(secondValue: string) {
    console.log(secondValue);
  }

}
