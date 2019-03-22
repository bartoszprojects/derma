import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-smart-atopia',
  templateUrl: './smart-atopia.component.html',
  styleUrls: ['./smart-atopia.component.scss']
})
export class SmartAtopiaComponent implements OnInit {
  @Input() formData;
  recruiter;

  constructor(private DataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.formData = this.DataService.getFormData();
    this.getRecruiterFromBackend();
  }

  logout() {
    localStorage.setItem('access_token', '');
    this.router.navigate(['/login']);
  }

  getRecruiterFromBackend() {
    this.DataService.getRecruiterFromBackend().subscribe(result => {
        this.recruiter = result['username'];
      },
    )
  };

}
