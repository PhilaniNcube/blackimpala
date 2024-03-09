import { getWeeklyEvents } from "@/lib/fetchers/events";
import Image from "next/image";

export const revalidate = 60 * 60 * 24;

const HomeWeeklyEvents = async () => {

  const { events, error } = await getWeeklyEvents();


  return (
			<section className="py-16">
				<div className="container lg:p-0">
					<div>
						<h2 className="text-2xl font-semibold md:text-4xl text-zinc-950">
							Weekly Events
						</h2>
						<p className="mt-4 text-lg text-zinc-950">
							Join us for our weekly events. We have something for everyone.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-8 mt-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
						{error ? (
							<p>No events</p>
						) : events !== null ? (
							events.map((event) => (
								<div key={event.id} className="bg-white rounded-md">
									<div className="relative">
										{event.image && (
											<Image
												src={event.image}
												alt={event.name}
												width={960}
                        height={640}
												objectPosition="center"
												className="object-cover w-full rounded-t-md aspect-video"
											/>
										)}
									</div>
									<div className="py-4">
										<h3 className="text-lg font-semibold text-zinc-950">
											{event.name}
										</h3>
										<p className="mt-2 text-sm text-zinc-950">
											{event.description}
										</p>
									</div>
								</div>
							))
						) : (
							<p>No events</p>
						)}
					</div>
				</div>
			</section>
		);
};
export default HomeWeeklyEvents;
