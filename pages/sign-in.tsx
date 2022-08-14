import Head from "next/head";
import { Fragment } from "react";
import SignIn from "../components/Auth/SignIn";

const SignInPage = () => {
  return <Fragment>
    <Head>
      <title>Sign In | Black Impala</title>
      <meta name="description" content="Log In page, sign into your black impala account"></meta>
    </Head>
    <main className="py-16">
      <SignIn />
    </main>
  </Fragment>;
};
export default SignInPage;
