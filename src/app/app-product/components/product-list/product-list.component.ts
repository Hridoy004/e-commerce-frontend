import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { ProductsService } from "../../services/products.service";
import { Product } from "../../interfaces/products.interfaces";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this._getProducts();
  }

  ngOnDestroy() {

  }

  private _getProducts() {
    this.productsService.GetProducts().subscribe((products) => {
      // @ts-ignore
      this.products = products;
      console.log(products);
    })
  }

  updateProduct(productid: string) {
    this.router.navigateByUrl(`products/form/${productid}`);
  }

/*  deleteProduct(productId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Product?',
      header: 'Delete Product',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService
          .deleteProduct(productId)
          .pipe(takeUntil(this.endsubs$))
          .subscribe(
            () => {
              this._getProducts();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Product is deleted!'
              });
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Product is not deleted!'
              });
            }
          );
      }
    });
  }*/

}
