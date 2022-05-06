import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  pageTitle: string = 'Product detail';

  constructor() { }

  ngOnInit(): void {
  }

}
