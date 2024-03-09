import Image from "next/image";

const MenuHeader = () => {
  return (
			<section className="relative mb-8">
				<Image
					src="/images/meal.jpg"
					alt="Meal"
					width={960}
					height={640}
					className="w-full aspect-video lg:aspect-[7/2] object-cover"
				/>
				<div className="absolute inset-0 bg-slate-800/70">
					<div className="container flex flex-col items-center justify-center h-full space-y-3 lg:p-0">
						<h2 className="text-2xl font-semibold text-white md:text-4xl lg:text-6xl">
							Our Menu
						</h2>
					</div>
				</div>
			</section>
		);
};
export default MenuHeader;
