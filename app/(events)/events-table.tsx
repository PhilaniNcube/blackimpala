import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/lib/fetchers/events";
import { format } from "date-fns";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const EventsTable = async ({ page }: { page: number }) => {
	const { events, count, error } = await getEvents(page);


  if (error || !events || events.length === 0) {
    return <div className="flex items-center justify-center py-20">
      <p>Could not fetch any events</p>
    </div>;
  }

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[200px]">Event Name</TableHead>
					<TableHead className="w-[150px]">Date</TableHead>
					<TableHead className="w-[200px]">Location</TableHead>
					<TableHead className="w-[150px]">View</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{events.map((event) => (
					<TableRow key={event.id}>
						<TableCell className="font-medium">{event.title}</TableCell>
						<TableCell>{format(event.date, 'PP', )}</TableCell>
						<TableCell>{event.location}</TableCell>
						<TableCell>
              <Link href={`/dashboard/events/${event.slug}`}>
							<Button size="sm"><EyeIcon /></Button>
              </Link>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
export default EventsTable;
