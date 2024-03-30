import EventImageUpload from "@/app/(events)/event-image-upload";
import UpdateEventForm from "@/app/(events)/update-event";
import { Separator } from "@/components/ui/separator";
import { getEvent } from "@/lib/fetchers/events";

type EventPageProps = {
	params: {
		slug: string;
	};
};

const EventPage = async ({ params: { slug } }: EventPageProps) => {

 const { event, error } = await getEvent(slug);

 if (error || !event) {
   return <div className="flex items-center justify-center py-20">
     <p>Could not fetch event</p>
   </div>;
 }


	return <div>
    <UpdateEventForm event={event} />
    <Separator className="my-3" />
    <div className="flex items-start space-x-4">
    {event?.image_url && <img src={event.image_url} alt={event.title} className="object-cover w-[350px]" />}
    <EventImageUpload slug={slug} />
    </div>

  </div>;
};
export default EventPage;
