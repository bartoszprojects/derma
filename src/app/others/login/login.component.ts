import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {Login} from "../../formData.model";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login;
  form: any;
  access_token;

  constructor(private formDataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.login = this.formDataService.getLogin();
  }

  save() {
    this.formDataService.setLogin(this.login);
    this.formDataService.sendLoginToBackend(this.login.username, this.login.password).subscribe(result => {
      this.access_token = result['access_token'];
      localStorage.setItem('access_token', this.access_token);
      console.log('FULL RESULT FROM TOKEN: ', result);
      console.log('FROM LOCAL STORAGE', localStorage.getItem('access_token'));
      this.router.navigate(['/home/welcome']);
    });

    return true;
  }

}
