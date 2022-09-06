import { useQuery } from "@tanstack/react-query";
import { useShoppingCart } from "../../context/ShoppingCartContext";

import getProducts, { getProductById } from "../../fetchers/getProducts";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: string,
  quantity: number,
}

const CartItem = ({id, quantity}: CartItemProps) => {


const {removeFromCart} = useShoppingCart()


   const {data, isSuccess, isLoading} = useQuery(['products'], getProducts, {
    refetchOnWindowFocus: false,
    refetchOnMount: true,
   })


   let item = data?.find((i) => i.id === id)
   if(item == null) return null


  return (
    <li key={item.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={item.id}>{item.name}</a>
            </h3>
            <p className="ml-4">{formatCurrency(item.price * quantity)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.category.title}</p>
          <p className="mt-1 text-sm text-gray-500">
            {formatCurrency(item.price)} each
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-slate-500"
              onClick={() => {
                if (typeof item?.id == 'string') {

                  removeFromCart(item.id)}}
                }
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
