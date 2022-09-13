import Head from "next/head";
import { Fragment } from "react";

const Orders = () => {
  return (<Fragment>
    <Head>
      <title>My Orders | Black Impala</title>
    </Head>
    <main>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl text-gray-700">My Orders</h1>
      </div>
    </main>
  </Fragment>);
};
export default Orders;
