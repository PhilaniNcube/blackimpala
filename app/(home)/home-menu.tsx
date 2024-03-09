import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getActiveProductsByBrand, getActiveProductsByCategory } from "@/lib/fetchers/products";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const HomeMenu = async () => {

  const { products, error, count } = await getActiveProductsByCategory(11);



  return (
			<section className="py-10 text-white bg-zinc-950">
				<div className="container px-8 lg:px-0">
					<h2 className="text-sm font-medium tracking-wider text-center uppercase">
						Our Menu
					</h2>
					<div className="flex items-center justify-around gap-8 ">
						<div className="hidden md:block flex-1 h-[1px] bg-white translate-y-2" />
						<p className="mt-4 text-4xl text-center text-balance">
							Good Vibes & Good Food
						</p>
						<div className="hidden md:block flex-1 h-[1px] bg-white translate-y-2" />
					</div>
					<div className="mt-8">
						{error ? (
							<div className="flex items-center justify-center">
								Could not get the menu
							</div>
						) : products ? (
							<div className="grid grid-cols-1 gap-10 py-4 lg:gap-16 md:grid-cols-2">
								{products.map((product) => (
									<Link
										href={`/menu/${product.slug}`}
										key={product.id}
										className="group"
									>
										<div className="flex items-center space-x-3 text-xl font-semibold group-hover:text-slate-200 md:text-2xl">
											<h3 className="">{product.name} - </h3>
											<span className="text-slate-200">
												{formatCurrency(product.price)}
											</span>
										</div>
										<p className="text-xs lowercase text-slate-200">
											{product.description}
										</p>
										<Separator className="my-2" />
									</Link>
								))}
							</div>
						) : (
							<div className="flex items-center justify-center">
								Could not load the products
							</div>
						)}
					</div>
					<div className="flex items-center justify-center">
						<Link href="/menu" className="">
							<Button
								variant="outline"
								type="button"
								className="= text-white uppercase bg-zinc-950 rounded-none"
							>
								View Full Menu
							</Button>
						</Link>
					</div>
				</div>
				<div className="relative">
					<div className="absolute inset-0 bg-black/60">
						<div className="container flex flex-col justify-center h-full space-y-3 lg:p-0">
							<small className="uppercase">Black Impala</small>
							<h2 className="text-2xl font-semibold text-white md:text-4xl lg:text-6xl">
								Not your average
							</h2>
							<p className="max-w-xl mt-2 lg:mt-4">
								The best place to enjoy braaied meat & african cusines,with
								great company,drinks and good music by the best DJs.
							</p>
						</div>
					</div>
					<Image
						src="/images/platter.jpg"
						width={960}
						height={640}
						alt="Platter"
						className="object-cover w-full aspect-[2/1] lg:aspect-[7/2] mt-16"
					/>
				</div>
			</section>
		);
};
export default HomeMenu;
