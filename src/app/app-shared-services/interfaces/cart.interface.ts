export interface Cart {
  items?: CartItem[];
}

export interface CartItem {
  prodctId?: string;
  quantity?: number;
}
