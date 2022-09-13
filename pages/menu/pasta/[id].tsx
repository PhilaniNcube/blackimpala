import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { format } from "date-fns";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

import { Product } from "../../../types";

const Product = ({ product }: { product: Product }) => {
  const { user } = useUser();

  const date = new Date();

  let time = date.getTime();

  let closed = parseInt(format(time, "HH")) > 23;



  const {
    cartQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
  } = useShoppingCart();

  let quantity = getItemQuantity(product.id);

  return (
    <Fragment>
      <Head>
        <title>
          {product.name} R{product.price} | Black Impala
        </title>
      </Head>
      <main className="bg-slate-700 min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={600}
              className="w-full object-cover"
            />
            <div className="w-full">
              <h1 className="text-yellow-400 text-2xl md:text-4xl lg:text-6xl font-brand font-bold">
                {product.name}
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-slate-200 ">
                {product.description}
              </p>
              <h2 className="mt-8 text-5xl text-slate-100 font-brand font-bold">
                R{product.price.toFixed(2)}
              </h2>

              {user ? (
                <Fragment>
                  <div className="flex space-x-3 items-center mt-8">
                    <span className="text-white text-2xl font-bold">
                      Quantity
                    </span>
                    <div className="flex items-center pl-8 ">
                      <button onClick={() => decreaseCartQuantity(product.id)}>
                        <RiSubtractLine className="text-white flex-1 h-8 w-8 cursor-pointer" />
                      </button>

                      <span className="text-white flex-2 text-2xl px-12">
                        {quantity}
                      </span>
                      <button onClick={() => increaseCartQuantity(product.id)}>
                        <RiAddLine className="text-white flex-1 h-8 w-8 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                  <button
                    disabled={closed}
                    className="bg-yellow-400 px-8 py-2 rounded text-slate-900 font-bold uppercase mt-8 font-brand"
                    onClick={() => increaseCartQuantity(product.id)}
                  >
                    {closed ? "Closed" : "Add To Cart"}
                  </button>
                </Fragment>
              ) : (
                <div className="mt-3 flex flex-col md:flex-row md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-3">
                  <Link href="/sign-in">
                    <button className="bg-white text-slate-800 text-sm md:text-xl font-medium px-8 py-2 rounded">
                      Please Sign In First{" "}
                    </button>
                  </Link>
                  <p className="text-white font-brand text-2xl text-center">
                    Or
                  </p>
                  <Link href="/sign-in">
                    <button className="bg-white text-slate-800 text-sm md:text-xl font-medium px-8 py-2 rounded">
                      Create An Account
                    </button>
                  </Link>
                </div>
              )}

              {closed && (
                <p className="mt-4 text-yellow-200 font-brand text-xl font-bold">
                  We are closed for orders now. The shop will be open again at
                  11am.
                </p>
              )}

              <p className="mt-4 text-slate-200 text-lg">
                Please note that we do not deliver to areas further than 20km
                from our location
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Product;

export async function getServerSideProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*, category(*)")
    .eq("id", id)
    .single();

  return {
    props: {
      product: data,
    },
  };
}
