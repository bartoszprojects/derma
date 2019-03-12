import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-common-data',
  templateUrl: './common-data.component.html',
  styleUrls: ['./common-data.component.scss'],
  inputs: ['element']
})
export class CommonDataComponent implements OnInit {
  pets;
  number;
  element;
  get_param;

  constructor(private formDataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.showUrlParam();
    this.getSingleDataFromBackend();

  }

  getSingleDataFromBackend() {
    this.formDataService.getSingleDataFromBackend(this.get_param).subscribe(result => {
      this.pets = result[this.element]
    });
  }
  showUrlParam() {
    const param = this.route.parent.snapshot.params['id'];
    this.get_param = param;
    console.log('url param id:     ', this.get_param)
  }
}

