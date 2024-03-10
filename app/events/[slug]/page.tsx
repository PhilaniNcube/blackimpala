type EventPageProps = {
  params: {
    slug: string;
  };
}

const EventPage = ({ params: { slug } }: EventPageProps) => {
	return <div>EventPage:{slug}</div>;
};
export default EventPage;
