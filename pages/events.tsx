import { Fragment } from "react";
import Link from 'next/link'
import Head from "next/head";
import EventHero from "../components/Event/EventHero";
import EventsGrid from "../components/Event/EventsGrid";

const events = () => {




  return <Fragment>
    <Head>
      <title>Events | Black Impala</title>
    </Head>
    <main className="bg-slate-800">
     <EventHero />
     <EventsGrid  />
    </main>
  </Fragment>;
};
export default events;
