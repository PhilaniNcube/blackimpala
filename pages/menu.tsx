import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { Fragment } from "react";
import MenuHero from "../components/Menu/MenuHero";
import MenuList from "../components/Menu/MenuList";
import getProducts from "../fetchers/getProducts";
import { Product } from "../types";

const menu = ({products} : {products: Product[]}) => {

  const {data, isLoading, isSuccess}: {
    data: Product[],
    isLoading: boolean,
    isSuccess: boolean} = useQuery(['products'], getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: products
  })


  return <Fragment>
    <Head>
      <title>Menu | Black Impala</title>
    </Head>
    <MenuHero />
    <MenuList />
  </Fragment>;
};
export default menu;


export async function getServerSideProps() {

  const products = await getProducts();

  return {
    props: {
      products,
    },
  };

}
