import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  // {path: '',component:HomeComponent},
  {path: '',component:QuoteComponent},
  {path: 'quote',component:QuoteComponent},
  {path: 'products',component:ProductComponent},
  // {path: 'addproduct',component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
