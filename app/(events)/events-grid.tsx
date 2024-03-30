/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UEpkDOBHOAn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import type { Database } from "@/schema";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type EventsGridProps = {
  events: Database['public']['Tables']['events']['Row'][]
}

export default function EventsGrid({events}: EventsGridProps) {
	return (
		<section className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{events.map((event) => (
				<article key={event.id} className="relative w-full overflow-hidden rounded-lg group">
					<Link className="absolute inset-0 z-10" href={`/events/${event.slug}`}>
						<span className="sr-only">View</span>
					</Link>
					<Image
						alt="Event 1"
						className="object-cover w-full aspect-video"
						height={300}
						src={event.image_url || "/images/placeholder.jpg"}
						width={400}
					/>
					<div className="p-4 bg-white dark:bg-gray-950">
						<h3 className="text-lg font-semibold md:text-xl">{event.title}</h3>
						<p className="text-sm text-gray-800 dark:text-gray-400">
							{format(event.date, 'PPP')} - {event.time}
						</p>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							{event.location}
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
						{event.description}
						</p>
					</div>
				</article>
			))}
		</section>
	);
}

