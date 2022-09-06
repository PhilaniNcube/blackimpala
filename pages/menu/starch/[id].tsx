import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { format } from "date-fns";
import Image from "next/future/image";
import Head from "next/head";
import { Fragment } from "react";
import { Product } from "../../../types";

const Platter = ({ product }: { product: Product }) => {
  const date = new Date();

  let time = date.getTime();

  let closed = parseInt(format(time, "HH")) > 23;

  console.log({ closed });

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

              <button
                disabled={closed}
                className="bg-yellow-400 px-8 py-2 rounded text-slate-900 font-bold uppercase mt-8 font-brand"
              >
                {closed ? "Closed" : "Add To Cart"}
              </button>

              {closed && (
                <p className="mt-4 text-yellow-200 font-brand text-xl font-bold">
                  We are closed for orders now. The shop will be open again at
                  11am.
                </p>
              )}

              <p className="mt-4 text-slate-200 font-brand text-sm">
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
export default Platter;

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
