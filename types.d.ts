export interface Category {
  id: string;
  created_at: string;
  title: string;
}

export interface Product {
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  category: Category;
  image: string;

}


export interface ICartType {
  id: string;
  created_at: string;
  profile_id: {
    id: string;
    created_at: string;
    email: string;
    first_name: string;
    last_name: string;
  };
  cartTotal: number;
  quantity: number;

}


export interface CartItemType {
  id: string;
  created_at: string;
  product_id: Product;
  quantity: number;
  cart_id: string;
}

export interface OrderItem {
  id: string;
  quantity: number;
}

export interface IOrderType {
  id: string;
  created_at: string;
  profile_id: string;
  order_total: number;
  shipping: number;
  address: string;
  first_name: string;
  last_name: string;
  email: string;
  postal_code: string;
  phone_number: string;
  order_items: OrderItem[];
  payment_id: string;
  paid:boolean;
  shipped:boolean;
}

export interface IOrderItem {
  id: Product;
  created_at: string;
  order_id: string;
  profile_id: string;
  quantity: number;
}
