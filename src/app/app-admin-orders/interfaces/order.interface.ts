import { OrderItem } from './order-item.interface';

export interface Order {
  id?: string;
  orderItems?: OrderItem[];
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  status?: String;
  totalPrice?: string;
  user?: any;
  dateOrdered?: string;
}
