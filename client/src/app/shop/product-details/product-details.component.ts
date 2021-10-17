import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(private shopService: ShopService, private activeRoute: ActivatedRoute , private bcService :BreadcrumbService)
   {
    this.bcService.set('@productDetails' ,' ')  // note space within empty string  ' '
    }

  ngOnInit(): void {
  this.loadProduct();
  }
  

  loadProduct() {
    // this.activeRoute.snapshot.paramMap.get('id')   =>> to get value from querysting
    //  Adding   +  to convert value from query string to  number 
    this.shopService.getProduct(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(response => {
      this.product = response;
      this.bcService.set('@productDetails' , this.product.name)
    }, error => {
      console.log(error)
    })
  }
}
