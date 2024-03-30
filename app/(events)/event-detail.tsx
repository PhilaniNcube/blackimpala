import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { Database } from "@/schema";
import { format } from "date-fns";
import { CheckIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type EventDetailPageProps = {
  event: Database['public']['Tables']['events']['Row'];
};

const EventDetailPage = ({ event }: EventDetailPageProps) => {
	return (
		<main className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32">
			<section className="w-full px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
					<Image
						alt="Event Poster"
						className="object-cover object-bottom mx-auto overflow-hidden rounded-xl sm:w-full lg:order-last "
						height="550"
						src={event.image_url || "/images/placeholder.jpg"}
						width="550"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
								{event.title}
							</h1>
							<p className="max-w-[500px] text-gray-500 md:text-lg dark:text-gray-400">
								Date: {format(event.date, 'PPP')} | Time: {event.time} | Location: {event.location}
							</p>
							<p className="max-w-[500px] text-gray-500 md:text-lg dark:text-gray-400">
							{event.description}
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
              {event.price === 0 ? (
                <p className="text-lg font-semibold text-green-500">Free Entry</p>
              )  : (<Link
								className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Purchase Tickets {event.price && formatCurrency(event.price)}
							</Link>)}

						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
export default EventDetailPage;
