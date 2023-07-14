import { Component, OnInit } from '@angular/core';
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";
import { Category } from "../../../app-admin-categories/interfaces/category.interface";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  // @ts-ignore
  isCategoryPage: boolean;
  checked = false;

  constructor(
    private productService: ProductService,
    private backendService: BackendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['categoryid'] ? this.getProducts([params["categoryid"]]) : this.getProducts();
      params["categoryid"] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
    });
    this._getCategories();
  }

  private _getCategories() {
    this.backendService.GetCategories().subscribe((response) => {
      // @ts-ignore
      this.categories = response;
    })
  }

  categoryFilter() {
    const selectedCategories = this.categories
      .filter((category) => category.checked)
      .map((category) => category.id);
      // @ts-ignore
    this.getProducts(selectedCategories)
  }

  private getProducts(categoriesFilter?:string[]) {
    this.productService.GetProductById(categoriesFilter).subscribe((response) => {
      // @ts-ignore
      this.products = response;
    })
  }

}
