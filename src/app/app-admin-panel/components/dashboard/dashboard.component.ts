import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../app-admin-products/services/products.service";
import { combineLatest, Subject, takeUntil } from "rxjs";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { OrderService } from "../../../app-admin-orders/services/order.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statistics: any[] = [];
  endsubs$: Subject<any> = new Subject();

  constructor(private backendService: BackendService,
              private productService: ProductsService,
              private ordersService: OrderService) {
  }

  ngOnInit(): void {
    combineLatest([
      this.ordersService.GetOrdersCount(),
      this.productService.GetProductCount(),
      this.backendService.GetUsersCount(),
      this.ordersService.GetTotalSales()
    ])
      .pipe(takeUntil(this.endsubs$))
      .subscribe((values) => {
        this.statistics = values;
        console.log(values)
      });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.endsubs$.next();
    this.endsubs$.complete();
  }
}
