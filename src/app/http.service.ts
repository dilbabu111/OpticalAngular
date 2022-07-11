import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getDropDownText(id, object){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }


  getDropDownProduct(id, object){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.productid));
    });
    return selObj;
  }

// GetPrdtDropDownValues(){
// return this.http.get('https://opticalwebapi.meltalong.com/api/productids');
// }

  GetProducts(){
    return this.http.get('http://webapi.domainopticals.com/api/products');
  }

  GetProduct(frameid: number){
    return this.http.get('http://webapi.domainopticals.com/api/products/' + frameid);
  }

  GetRateInputs(){
    return this.http.get('http://webapi.domainopticals.com/api/rateinputs');
  }

  GetRateInput(id: number){
    return this.http.get('http://webapi.domainopticals.com/api/rateinputs/' + id);
  }

  // AddNewProduct(product: object) {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(product);
  //   console.log(body)
  //   return this.http.post('https://opticswebapi.meltalong.com/api/products', body,{'headers':headers})
  // }

}
