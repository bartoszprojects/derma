import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Login} from "../../formData.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login;
  form: any;
  constructor(private formDataService: DataService, private router: Router) { }

  ngOnInit() {
    this.login = this.formDataService.getLogin();
    // this.router.navigate(['/home/welcome']);
  }

  save() {
    this.formDataService.setLogin(this.login);
    console.log(this.formDataService.getLoginForm());
    this.formDataService.sendLoginToBackend();
    return true;
  }

}
