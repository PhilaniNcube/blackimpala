import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import HomeHero from '../components/home/HomeHero'
import HomeMenu from '../components/home/HomeMenu'
import HomeSectionOne from '../components/home/HomeSectionOne'
import MenuList from '../components/home/MenuList'
import getCategories from '../fetchers/getCategories'
import getProducts, { getPlatters } from '../fetchers/getProducts'
import { Category, Product } from '../types'

const Home = ({ platters }: { platters: Product[] }) => {
  const { data, error, isLoading, isSuccess } = useQuery(
    ["platters"],
    getPlatters,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      initialData: platters,
    }
  );

  return (
    <Fragment>
      <Head>
        <title>Home | Black Impala</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Black Impala Restaurant and Tshisanyama "
        ></meta>
      </Head>
      <HomeHero />
      <HomeSectionOne />
      <HomeMenu />
      <MenuList platters={data} />
    </Fragment>
  );
};

export default Home


export async function getStaticProps() {
   const categories = await getCategories();
   const platters = await getPlatters();


   return {
     props: {
       categories: categories,
       platters: platters,
     },
   };
}
