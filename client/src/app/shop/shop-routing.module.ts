import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes : Routes=[
  {path:'', component: ShopComponent},
  {path:':id', component: ProductDetailsComponent , data:{breadcrumb :{alias :'productDetails' }} },
]

@NgModule({
  declarations: [],
  imports: [
    // forChild means these routes are not available in app module, it only availabe in shop module 
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ShopRoutingModule { }
