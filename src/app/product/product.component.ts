import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.GetProducts().subscribe(data => {
      this.products = data;
    });
  }

}
