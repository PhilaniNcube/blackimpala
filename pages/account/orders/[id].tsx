import { getUser, supabaseClient, supabaseServerClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { NextRequest, NextResponse } from "next/server";
import { ContextType, Fragment } from "react";
import { IOrderItem, IOrderType } from "../../../types";
import { formatCurrency } from "../../../utilities/formatCurrency";

const Order = ({
  order,
  order_items,
}: {
  order: IOrderType;
  order_items: IOrderItem[];
}) => {
  console.log({ order_items, order });

  return (
    <Fragment>
      <Head>
        <title>Order</title>
      </Head>
      <main className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16 text-slate-100">
          <h1 className="font-brand text-3xl font-bold">Order Summary</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full py-8">
              <h2 className="text-xl font-medium underline">
                Shipping Details:
              </h2>

              <p className="text-lg">
                Name: {order.first_name} {order.last_name}
              </p>
              <p className="text-lg">Email: {order.email}</p>
              <p className="text-lg">Contact Number: {order.phone_number}</p>
              <p className="text-lg">Address: {order.address}</p>
              <p className="text-lg">Postal Code: {order.postal_code}</p>
              <h2 className="text-sm font-light mt-3">Order ID:{order.id}</h2>
            </div>
            <div className="p-4 w-full bg-slate-700 rounded-lg">
              <h2 className="text-md font-medium">Order Items</h2>
              <div className="border border-slate-600 mt-3 p-2 rounded-md">
                {order_items.map((item) => (
                  <div className="flex space-x-3">
                    <img
                      className="h-20 rounded aspect-video"
                      src={item.id.image}
                      alt={item.id.name}
                    />
                    <span className="flex-1">
                      <p className="text-md">{item.id.name}</p>
                      <p className="text-sm">{formatCurrency(item.id.price)} each</p>
                      <p className="text-sm">&times; {item.quantity} </p>
                    </span>
                  </div>
                ))}
                <p className="text-lg mt-4">Subtotal {formatCurrency(order.order_total)} </p>
                <p className="text-lg">Shipping {formatCurrency(order.shipping)} </p>

                <p className="text-xl mt-2 font-medium">Total {formatCurrency(order.shipping + order.order_total)} </p>

                <button className="px-12 py-2 bg-slate-50 rounded-lg text-slate-900 font-medium uppercase mt-4">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Order;


export const getServerSideProps:GetServerSideProps = async (ctx) => {

  let { data, error } = await supabaseServerClient(ctx)
    .from("orders")
    .select("*")
    .eq("id", ctx?.params?.id)
    .single();

    let { data: order_items, error: order_item_errors } =
      await supabaseServerClient(ctx)
        .from("order_item")
        .select("*, id(*)")
        .eq("order_id", ctx?.params?.id);

  return {
    props: {
      order: data,
      order_items,
    },
  };
}
