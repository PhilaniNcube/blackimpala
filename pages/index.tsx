import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import HomeHero from '../components/home/HomeHero'
import HomeMenu from '../components/home/HomeMenu'
import MenuList from '../components/home/MenuList'

const Home: NextPage = () => {
  return (
   <Fragment>
     <Head>
      <title>Home | Black Impala</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="description" content="Black Impala Restaurant and Tshisanyama "></meta>
     </Head>
     <HomeHero />
     <HomeMenu />
     <MenuList />
   </Fragment>
  )
}

export default Home
