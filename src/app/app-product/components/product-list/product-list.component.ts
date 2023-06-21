import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Product } from "../../interfaces/products.interfaces";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  editmode = false;
  products: Product[] = [];

  constructor(private productsService: ProductsService,
              private confirmationService: ConfirmationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this._getProducts();
  }

  deleteProduct(productId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Product?',
      header: 'Delete Product',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService.DeleteProducts(productId).subscribe(() => {
          this._getProducts();
        });
      }
    });
  }

  updateProduct(productId: string) {
    this.router.navigateByUrl(`/a/p/product-form/${productId}`);
  }

  private _getProducts() {
    this.productsService.GetProducts().subscribe((products) => {
      // @ts-ignore
      this.products = products;
    })
  }

}
