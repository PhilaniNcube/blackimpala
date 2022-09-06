import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import ShoppingCart from "../components/Cart/ShoppingCart";
import getProducts, { getProductById } from "../fetchers/getProducts";


type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  cartTotal: number;
};



const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {




  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(
[]
  );


  const {data:products, isLoading:productsLoading, isError:productsError} = useQuery(['products'], getProducts)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );


  useEffect(() => {

    console.log(window)


    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem("shopping_cart") ;
    if (data !== null) setCartItems(JSON.parse(data));
    }
  },[])


  useEffect(() => {
    window.localStorage.setItem('shopping_cart', JSON.stringify(cartItems))
  },[cartItems])

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartTotal = cartItems.reduce((total, cartItem) => {
 const item = products?.find((i) => i.id === cartItem.id);
   return total + (item?.price || 0) * cartItem.quantity
  },0)


  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        cartTotal
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} closeCart={closeCart} openCart={openCart} />
    </ShoppingCartContext.Provider>
  );
}
