import Head from "next/head";
import { Fragment } from "react";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactHero from "../components/Contact/ContactHero";
import MapSection from "../components/Contact/MapSection";

const contact = () => {
  return <Fragment>
              <Head>
                <title>Contact Us | Black Impala</title>
              </Head>
              <main>
                <ContactHero />
                <MapSection />
                <ContactFormSection />
              </main>
         </Fragment>;
};
export default contact;
