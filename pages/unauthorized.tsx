import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

const unauthorized = () => {
  return <Fragment>
    <Head>
      <title>Error | Black Impala</title>
    </Head>
    <main >
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-6xl font-extrabold text-gray-700">Unauthorized</h1>
        <h3 className="mt-4 text-xl font-bold text-sky-500">You do not have permission to access this resource</h3>
        <Link href="/">
        <button className="bg-blue-600 mt-3 text-white font-medium text-lg px-10 py-2 rounded">Back To Home Page</button>
        </Link>
      </div>
    </main>
  </Fragment>;
};
export default unauthorized;
