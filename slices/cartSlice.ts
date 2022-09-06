import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

export interface CartItem extends Product {
quantity: number;
}

export interface CartState {
 productsInCart: CartItem[];
 cartTotal: number;
 isOpen: boolean;

}


const initialState: CartState = {
  productsInCart: [],
  cartTotal:0,
  isOpen:false,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action:PayloadAction<CartItem>) => {
      const productInCart = state.productsInCart.find(product => product.id === action.payload.id)
      if(!productInCart) {
        state.productsInCart.push({ ...action.payload, quantity : 1})

        state.cartTotal = state.productsInCart.reduce((acc, product) => {
            return acc + product.price * product.quantity
        }, 0)
      } else {
        productInCart.quantity++;
           state.cartTotal = state.productsInCart.reduce((acc, product) => {
            return acc + product.price * product.quantity
        }, 0)
      }
    },

  }
})
