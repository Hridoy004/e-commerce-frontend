import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  // @ts-ignore
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
