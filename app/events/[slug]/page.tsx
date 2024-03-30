import EventDetailPage from "@/app/(events)/event-detail";
import { getEvent } from "@/lib/fetchers/events";

type EventPageProps = {
  params: {
    slug: string;
  };
}

const EventPage = async ({ params: { slug } }: EventPageProps) => {

  const {event, error} = await getEvent(slug);

  // if there is an error or the event is not found return JSX showing that the event was not found
  if(error || !event) {
    console.error(error);
    return <div>Event not found</div>;
  }

	return <div className="container">
    <EventDetailPage event={event} />
  </div>;
};
export default EventPage;
