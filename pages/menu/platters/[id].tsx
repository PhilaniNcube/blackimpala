import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import Head from "next/head";
import { Fragment } from "react";
import { Product } from "../../../types";

const Platter = ({product}: {product: Product}) => {
  return (
           <Fragment>
             <Head>
               <title>Platter | Black Impala</title>
             </Head>
             <main>
              <div className="max-w-7xl mx-auto px-4">
                {product.name}
              </div>
             </main>
           </Fragment>
           )
};
export default Platter;



export async function getServerSideProps({params: {id}}: {params: {id: string}}) {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*, category(*)").eq('id', id).single()


  return {
    props: {
      product:data,
    },

  };
}




