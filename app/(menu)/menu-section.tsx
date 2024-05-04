import { Separator } from "@/components/ui/separator";
import { getActiveProductsByCategory, getProductByCategoryId } from "@/lib/fetchers/products";
import { formatCurrency } from "@/lib/utils";
import type { Database } from "@/schema";
import AddToCart from "../(products)/add-to-cart";


type MenuSectionProps = {
  category: Database['public']['Tables']['categories']['Row']
}


export default async function MenuSection({  category }: MenuSectionProps) {

  const { products, error , count} = await getActiveProductsByCategory(category.id);

	return (
		<section className="container lg:p-0">
			{error ? null : products === null ? null : products.length ===
			  0 ? null : (
				<section>
          <h3 className="text-2xl font-semibold text-center uppercase lg:text-4xl">{category.name}</h3>
					<div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
						{products.map((item) => (
							<article key={item.id}>
								<h4 className="text-lg font-medium lg:text-xl text-zinc-900">{item.name}</h4>
								<p className="text-sm lowercase line-clamp-1">{item.description}</p>
								<p className="text-lg font-bold">{formatCurrency(item.price)}</p>
                <AddToCart product={item} />
                <Separator className="my-2" />
							</article>
						))}
					</div>
				</section>
			)}
		</section>
	);
}

