import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../app-admin-products/services/products.service";
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];


  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);
  }

}
