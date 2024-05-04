import type { Database } from '@/schema';
import {createStore} from 'zustand/vanilla';

export type CartState ={
  cart: {
   product: Database['public']['Tables']['products']['Row'];
    quantity: number;
  }[],
  cartIsOpen: boolean;
}

export type CartActions = {
		addToCart: (
			product: Database["public"]["Tables"]["products"]["Row"],
		) => void;
		removeFromCart: (
			product: Database["public"]["Tables"]["products"]["Row"],
		) => void;
		clearCart: () => void;
		openCart: () => void;
		closeCart: () => void;

		// reduceFromCart: (item_id: string) => void;
	};

export type CartStore = CartState & CartActions;

export const initCartStore = ():CartState => {
  return {
    cart: [],
    cartIsOpen: false
  }
};

export const defaultInitState: CartState = {
  cart: [],
  cartIsOpen: false
}

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    addToCart: (product) => set((state) => {
      //check to see if the item is already in the cart
      const item = state.cart.find((item) => item.product.id === product.id);

      //if the item is in the cart, increase the quantity
      if(item) {
        const newCart = state.cart.map((item) => {
          if(item.product.id === product.id) {
            return {...item, quantity: item.quantity + 1}
          }
          return item;
        });
        return {cart: newCart};
      }

      //if the item is not in the cart, add it to the cart
      return {cart: [...state.cart, {product: product, quantity: 1}]};
    }),
    clearCart: () => set({cart: []}),

    removeFromCart: (product) => set((state) => {
      //check to see if the item is already in the cart
      const item = state.cart.find((item) => item.product.id === product.id);

      //if the item is in the cart, decrease the quantity
      if(item) {
        const newCart = state.cart.map((item) => {
          if(item.product.id === product.id) {
            return {...item, quantity: item.quantity - 1}
          }
          return item;
        });
        return {cart: newCart.filter((item) => item.quantity > 0)};
      }

      //if the item is not in the cart, do nothing
      return {cart: state.cart};

    }),
    openCart: () => set({cartIsOpen: true}),
    closeCart: () => set({cartIsOpen: false})

  }))
};


