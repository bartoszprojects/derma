import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Status} from "../../formData.model";

@Component({
  selector: 'app-pyoderma-otitis',
  templateUrl: './pyoderma-otitis.component.html',
  styleUrls: ['./pyoderma-otitis.component.scss']
})
export class PyodermaOtitisComponent implements OnInit {
  status_form: Status;
  form: any;
  is_pyodermatitis = null;
  is_malassezia = null;
  is_otitis= null;

  constructor(private formDataService: DataService) { }

  ngOnInit() {
    this.status_form = this.formDataService.getStatus();
  }

  save() {
    if (this.is_pyodermatitis) {
      this.status_form.exclusion_reason.push('PYODERMATITIS')
    }
    if (this.is_otitis) {
      this.status_form.exclusion_reason.push('OTITIS')
    }
    if (this.is_malassezia) {
      this.status_form.exclusion_reason.push('MALASSEZIA_DERMATITIS')
    }
    this.formDataService.setStatus(this.status_form);
    return true
  }
}
