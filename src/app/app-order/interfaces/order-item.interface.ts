import { Product } from "../../app-product/interfaces/products.interfaces";

export interface OrderItem {
  product?: Product;
  quantity?: number;
}
