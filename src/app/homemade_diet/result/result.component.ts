import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {MatTableModule} from '@angular/material/table';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {ActivatedRoute} from '@angular/router';
import {Observable, Observer} from 'rxjs';


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
  base64Image: any;
  convertedImageUrl: any;
  show_pdf_spinner = false;

  constructor(private formDataService: DataService, private route: ActivatedRoute) {
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

      for (let elem in this.data) {
        let img_path = 'https://api.snv-derma.rootxnet.com/media/' + this.data[elem].img;
        this.getBase64ImageFromURL(img_path).subscribe(base64data => {
          console.log(base64data);
          this.convertedImageUrl = base64data;
          this.data[elem].img = 'data:image/jpg;base64,' + base64data;
        });
      }


      this.dataSource = this.table_data;
      console.log(this.table_data);
    });
  }

  public captureScreen() {
    this.show_pdf_spinner = true;
    var data = document.getElementById('contentToConvert');

    html2canvas(data).then(canvas => {

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'pt', 'a4', true); // A4 size page of PDF
      var position = 0;

      var imgWidth = pdf.internal.pageSize.getWidth();
      var pageHeight = pdf.internal.pageSize.getHeight();
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
      pdf.save('MYPdf.pdf'); // Generated PDF
      this.show_pdf_spinner = false;
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

}
