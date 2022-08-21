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
