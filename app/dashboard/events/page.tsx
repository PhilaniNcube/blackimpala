import EventsTable from "@/app/(events)/events-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

const EventsPage = ({
	searchParams,
}: {
	searchParams?: {
		page?: string;
	};
}) => {
	const page = Number(searchParams?.page) || 1;
	console.log(page);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-medium">Events</h1>
				<Link href="/dashboard/events/create">
					<Button className="btn btn-primary">
						<PlusIcon />
						Create Event
					</Button>
				</Link>
			</div>
			<Separator className="my-3" />
			<EventsTable page={page} />
		</div>
	);
};
export default EventsPage;
