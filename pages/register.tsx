import Head from "next/head";
import { Fragment } from "react";
import Register from "../components/Auth/Register";

const RegisterPage = () => {
  return <Fragment>
    <Head>
      <title>Register | Black Impala</title>
    </Head>
    <main className="py-16">
      <Register />
    </main>
  </Fragment>;
};
export default RegisterPage;
