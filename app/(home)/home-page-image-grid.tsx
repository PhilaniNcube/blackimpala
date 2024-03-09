import Image from "next/image";

const images = [
  {
    src: "/images/benches.jpg",
    alt: "Benches",
  },
  {
    src: "/images/big_platter.jpg",
    alt: "Large Platter",
  },
  {
    src: "/images/bowl.jpg",
    alt: "Bowl",
  },
  {
    src: "/images/meal.jpg",
    alt: "Meal",
  },
  {
    src: "/images/outdoor.jpg",
    alt: "Outdoor",
  },
  {
    src: "/images/table_reservation.jpg",
    alt: "Table Reservation",
  },
];

const HomePageImageGrid = () => {
  return (
			<section className="pt-16">
				<div className="container grid grid-cols-2 gap-4 lg:p-0 lg:grid-cols-3 lg:gap-6">
					{images.map((image, index) => (
						<div key={image.src} className="relative aspect-video">
							<Image
								src={image.src}
								alt={image.alt}
								layout="fill"
								className="w-full h-full overflow-hidden rounded-md aspect-video"
								objectFit="cover"
								objectPosition="center"
							/>
						</div>
					))}
				</div>
			</section>
		);
};
export default HomePageImageGrid;
