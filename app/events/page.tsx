import { getEvents } from "@/lib/fetchers/events";
import EventsGrid from "../(events)/events-grid";

const EventsPage = async () => {

  const {events, error, count} = await getEvents();

 if(error || !events || count === 0) {
   console.error(error);
   return <main className="flex items-center justify-center h-screen" >Error: Could not fetch events</main>;
  }

  return <main className="min-h-screen py-10" >
     <EventsGrid events={events}  />
  </main>;
};
export default EventsPage;
