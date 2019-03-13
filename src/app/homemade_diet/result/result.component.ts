import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  table_data = [];
  data;
  displayedColumns: string[] = ['ingredients', 'energy', 'protein', 'fat', 'carbohydrate', 'calcium', 'phosphorus'];
  dataSource;

  printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  constructor(private formDataService: DataService) {
  }

  ngOnInit() {
    this.formDataService.getRecipeDataFromBackend().subscribe(result => {
      this.data = result;
        for (let elem in this.data) {

        this.table_data.push({
          ingredients: this.data[elem].title,
          energy: this.data[elem].energy,
          protein: this.data[elem].protein,
          fat: this.data[elem].fat,
          carbohydrate: this.data[elem].carbohydrate,
          calcium: this.data[elem].calcium,
          phosphorus: this.data[elem].phosphorus
      });


        }

       this.dataSource = this.table_data;
      console.log(this.table_data)

    });
  }

}
