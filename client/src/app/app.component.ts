import { HttpClient } from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  constructor(private http:HttpClient){
  }
  products:IProduct[];
  ngOnInit(): void {
    this .http.get('https://localhost:5001/api/products?pageSize=20').subscribe((respose:IPagination) =>{
      this.products= respose.data;
      })
  }

  title = 'SkiNet';
 
}
