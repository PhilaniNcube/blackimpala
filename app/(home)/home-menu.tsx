import { Separator } from "@/components/ui/separator";
import { getActiveProductsByCategory } from "@/lib/fetchers/products";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

const HomeMenu = async () => {

  const {products, error, count} = await getActiveProductsByCategory(11);



  return (
			<section className="py-10 text-white bg-zinc-950">
				<div className="container px-8 lg:px-0">
					<h2 className="text-sm text-center uppercase">Our Menu</h2>
					<div className="flex items-center justify-around gap-8">
						<div className="hidden md:block flex-1 h-[1px] bg-white" />
						<p className="mt-4 text-4xl text-center text-balance">
							Good Vibes & Good Food
						</p>
						<div className="hidden md:block flex-1 h-[1px] bg-white" />
					</div>
					<pre>
						{error ? (
							<div>Could not get the menu</div>
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
							<div>COuld not load the products</div>
						)}
					</pre>
				</div>
			</section>
		);
};
export default HomeMenu;
