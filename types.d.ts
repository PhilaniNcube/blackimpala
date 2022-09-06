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
