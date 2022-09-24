import Head from "next/head";
import { Fragment } from "react";

const ReturnUrl = () => {
  return <Fragment>
    <Head>
      <title>Order Success | Black Impala</title>
    </Head>
    <main className="bg-slate-900 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <h1 className="font-bold font-brand text-white text-5xl">Payment Successful</h1>
      </div>
    </main>
  </Fragment>;
};
export default ReturnUrl;
