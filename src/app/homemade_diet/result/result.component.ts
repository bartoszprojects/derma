import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {MatTableModule} from '@angular/material/table';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {ActivatedRoute} from "@angular/router";

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
  single_pet_id;
  pet;
  single_pet_id_from_url;

  constructor(private formDataService: DataService,  private route: ActivatedRoute) {
  }

  getSingleDataFromBackend() {
      this.formDataService.getSingleDataFromBackend(this.single_pet_id.id_number).subscribe(result => {
        this.pet = result;
      });
    }

  ngOnInit() {
    this.single_pet_id = this.formDataService.getFormData();
    this.getSingleDataFromBackend();

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

  public captureScreen()
  {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

}
