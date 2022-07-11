import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

iproductname: string;
iproductcategory: number;
iframetype: number;
iframematerial: number;
iframeshape: number;
ilensmaterial: number;
igender: number;
iagegroup: number;
idelproductrate: number;
isaleproductrate: number;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    
  }

  addnewproduct()
  {
      let newproduct = new Product();

      newproduct.productname = this.iproductname;
newproduct.productcategory = this.iproductcategory;
newproduct.frametype = this.iframetype;
newproduct.frametype = this.iframetype;
newproduct.framematerial = this.iframematerial;
newproduct.frameshape = this.iframeshape;
newproduct.lensmaterial = this.ilensmaterial;
newproduct.gender = this.igender;
newproduct.agegroup = this.iagegroup;
newproduct.delproductrate = this.idelproductrate;
newproduct.saleproductrate = this.isaleproductrate;

    // this._http.AddNewProduct(newproduct).subscribe();
  }
}
