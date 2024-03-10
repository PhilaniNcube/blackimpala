import EventImageUpload from "@/app/(events)/event-image-upload";

type EventPageProps = {
	params: {
		slug: string;
	};
};

const EventPage = ({ params: { slug } }: EventPageProps) => {
	return <div>
    <EventImageUpload slug={slug} />
  </div>;
};
export default EventPage;
