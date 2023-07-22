import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CartService } from "../../../app-shared-services/services/cart.service";
import { OrderService } from "../../services/order.service";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { OrderItem } from "../../../app-admin-orders/interfaces/order-item.interface";
import { Subject } from "rxjs";
import { Order } from "../../../app-admin-orders/interfaces/order.interface";
import { Cart } from "../../../app-shared-services/interfaces/cart.interface";
import { User } from "../../../app-shared-services/interfaces/user.interface";
import { StripeService } from "ngx-stripe";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router,
              private backendService: BackendService,
              private formBuilder: FormBuilder,
              private cartService: CartService,
              private ordersService: OrderService,
              private route: ActivatedRoute,
              private stripeService: StripeService) {
  }

  // @ts-ignore
  checkoutFormGroup: FormGroup;
  isSubmitted = false;
  orderItems: OrderItem[] = [];
  userId: any;
  stat = 'Pending';
  unsubscribe$: Subject<any> = new Subject();

  ngOnInit(): void {
    this._initCheckoutForm();
    this._profile();
    this._getCartItems();
  }

  ngOnDestroy() {
    // @ts-ignore
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required]
    });
  }


  private _profile() {
    this.backendService.Profile().subscribe((response: any) => {
      this.checkoutFormGroup.get('email')?.setValue(response.User.Email);
      this.userId = response.User.UserId;
    })
  }


  private _getCartItems() {
    const cart: Cart = this.cartService.getCart();
    // @ts-ignore
    this.orderItems = cart.items.map((item) => {
      return {
        product: item.productId,
        quantity: item.quantity
      };
    });
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }

    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm['street'].value,
      shippingAddress2: this.checkoutForm['apartment'].value,
      city: this.checkoutForm['city'].value,
      zip: this.checkoutForm['zip'].value,
      country: this.checkoutForm['country'].value,
      phone: this.checkoutForm['phone'].value,
      status: this.stat,
      user: this.userId,
      dateOrdered: `${Date.now()}`
    };

    this.ordersService.CacheOrderData(order);

    this.ordersService.CreateCheckoutSession(this.orderItems).subscribe((error) => {
      if (error) {
        console.log("error in redirect to payment");
      }
    })
  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }

}
