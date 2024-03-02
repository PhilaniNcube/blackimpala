import Image from "next/image";

const HomePageHero = () => {
  return (
			<section className="relative w-full h-[calc(100vh-150px)]">
				<Image
					src="/images/platter.jpg"
					alt="Platter"
					width={960}
					height={640}
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0 ">
					<div className="flex flex-col items-center justify-center h-full text-center text-white bg-slate-800/70 gap-y-3">
						<div className="container flex flex-col px-10 gap-y-3 lg:px-0">
							<p className="uppercase text-md">
								Good Vibes & Good Food
							</p>
							<h1 className="text-3xl font-extrabold md:text-4xl lg:text-7xl">
								Welcome To Black Impala
							</h1>
							<small className="text-sm sm:text-md lg:text-lg">
								The best place in Gqeberha to enjoy a meal with friends and
								family
							</small>
						</div>
					</div>
				</div>
			</section>
		);
};
export default HomePageHero;
