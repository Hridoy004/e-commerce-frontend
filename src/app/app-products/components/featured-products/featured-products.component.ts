import { Component, OnInit } from '@angular/core';
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";
import { ProductsService } from "../../../app-admin-products/services/products.service";

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private prodService: ProductsService) {
  }

  ngOnInit(): void {
    this._getFeaturedProducts();
  }


  private _getFeaturedProducts() {
    this.prodService.FeaturedProducts(4).subscribe((products) => {
      // @ts-ignore
      this.featuredProducts = products;
    });
  }
}
