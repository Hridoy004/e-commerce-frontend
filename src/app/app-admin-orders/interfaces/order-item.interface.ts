import { Product } from "../../app-admin-products/interfaces/products.interfaces";

export interface OrderItem {
  product?: Product;
  quantity?: number;
}
