import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Fragment } from "react";
import CartItem from "../components/Cart/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import getProducts, { getProductById } from "../fetchers/getProducts";
import { formatCurrency } from "../utilities/formatCurrency";

const Checkout = () => {

  const router = useRouter()

   const { data, isSuccess, isLoading } = useQuery(["products"], getProducts, {
     refetchOnWindowFocus: false,
     refetchOnMount: true,
   });


const { cartItems, cartTotal } = useShoppingCart();


const { user } = useUser();

const confirmOrder = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const {first_name, last_name, phone_number, address, postal_code} = Object.fromEntries(new FormData(e.currentTarget));




  const { data, error } = await supabaseClient
    .from("orders")
    .insert([
      {

        first_name,
        last_name,
        order_total: cartTotal,
        phone_number,
        address,
        postal_code,
        shipping: 65,
        profile_id: user?.id,
        order_items:cartItems,
      },
    ])
    .single();

    console.log({data, error})

    if(data) {
      cartItems.forEach(async (item) => {
        const { data: order_item, error } = await supabaseClient
          .from("order_item")
          .insert([{ id: item.id, quantity: item.quantity, order_id: data.id }]);
      })



      router.push(`/orders/${data.id}`)

    }




};



  return (
    <Fragment>
      <Head>
        <title>Checkout | Black Impala</title>
      </Head>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/** Contact Info **/}

          <h1 className="text-3xl font-bold text-slate-700">Checkout</h1>

          <form onSubmit={confirmOrder} className="grid grid-cols-2 gap-4 py-8">
            <div className="w-full col-span-2 md:col-span-1">
              <h2 className="text-xl font-medium text-slate-700">
                Contact Information
              </h2>
              <div className="w-full sm:w-2/3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  required
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full col-span-2 md:col-span-1">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    required
                    autoComplete="first_name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="w-full col-span-2 md:col-span-1">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    required
                    autoComplete="last_name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
              <div className="w-full md:w-2/3 ">
                <div className="w-full ">
                  <label
                    htmlFor="phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    required
                    autoComplete="phone_number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>{" "}
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-4 md:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    autoComplete="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="postal_code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal Code
                  </label>
                  <input
                    type="number"
                    name="postal_code"
                    id="postal_code"
                    required
                    autoComplete="postal_code"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/**Cart Details* */}
            <div className="w-full h-full col-span-2 md:col-span-1">
              <h2 className="text-gray-700 text-2xl font-medium">
                Order Summary
              </h2>
              <div className="w-full border h-full p-3 border-gray-200 rounded-lg mt-3 bg-gray-100 ">
                {cartItems.map((item) => {
                  return (
                    <Fragment>
                      <CartItem
                        key={item.id}
                        id={item.id}
                        quantity={item.quantity}
                      />{" "}
                      <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-2">
                          <div className="border-t border-gray-200" />
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
                <div className="w-full mb-3 flex justify-between">
                  <p className="text-lg font-medium text-gray-700">Subtotal</p>
                  <p className="text-lg font-medium text-gray-700">
                    {formatCurrency(cartTotal)}
                  </p>
                </div>
                <div className="w-full mb-3 flex justify-between">
                  <p className="text-lg font-medium text-gray-700">Shipping</p>
                  <p className="text-lg font-medium text-gray-700">
                    {formatCurrency(65)}
                  </p>
                </div>{" "}
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-2">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>
                <div className="w-full mt-5 mb-3 flex justify-between">
                  <p className="text-xl font-medium text-gray-700">Total</p>
                  <p className="text-xl font-medium text-gray-700">
                    {formatCurrency(cartTotal + 65)}
                  </p>
                </div>{" "}
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-2">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg w-full py-2 text-white"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};
export default Checkout;
