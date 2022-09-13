import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

export interface CartItem extends Product {
quantity: number;
}

export interface CartState {
 productsInCart: CartItem[];
 total: number;
 cartOpen: boolean;

}


const initialState: CartState = {
  productsInCart: [],
  total:0,
  cartOpen:false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action:PayloadAction<Product>) => {
       const productInCart = state.productsInCart.find(product => product.id === action.payload.id)

       if(productInCart === undefined) {
        state.productsInCart.push({...action.payload, quantity: 1})
        state.total = state.productsInCart.reduce((acc, product) => {
         return  acc + product.price * product.quantity
        },0)
       } else {
        productInCart.quantity++
         state.total = state.productsInCart.reduce((acc, product) => {
         return  acc + product.price * product.quantity
        },0)
       }
    },
    deleteItemFromCart: (state, action:PayloadAction<Product>) => {
         const productInCartIndex = state.productsInCart.findIndex((product) => product.id === action.payload.id)

         if(state.productsInCart[productInCartIndex].quantity === 1){
          state.productsInCart.splice(productInCartIndex, 1)
           state.total = state.productsInCart.reduce((acc, product) => {
         return  acc + product.price * product.quantity
        },0)
         } else {
          state.productsInCart[productInCartIndex].quantity--
           state.total = state.productsInCart.reduce((acc, product) => {
         return  acc + product.price * product.quantity
        },0)
         }
    },
    openCart: (state ) => {
      state.cartOpen = true
    },
        closeCart: (state ) => {
      state.cartOpen = false
    },
  }
})


export const {addItemToCart, deleteItemFromCart, openCart, closeCart} = cartSlice.actions

export default cartSlice.reducer
