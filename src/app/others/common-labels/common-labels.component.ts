import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-labels',
  templateUrl: './common-labels.component.html',
  styleUrls: ['./common-labels.component.scss'],
  inputs: ['label_title', 'label_desc', 'icon']
})
export class CommonLabelsComponent implements OnInit {
  label_title;
  label_desc;
  icon;
  constructor() { }

  ngOnInit() {
  }

}
