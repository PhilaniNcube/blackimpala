import CreateProductForm from "@/app/(products)/create-product-form";
import { Separator } from "@/components/ui/separator";
import { getBrands } from "@/lib/fetchers/brands";
import { getCategories } from "@/lib/fetchers/categories";

const page = async () => {
const categoriesPromise =  getCategories()
const brandsPromise =  getBrands()

const [categoriesData, brandsData] = await Promise.all([categoriesPromise, brandsPromise])

if(categoriesData.error !== null || brandsData.error !== null) {
  return <div>There was a server error, please try again later</div>
}


  return (
			<div>
				<h1 className="text-2xl font-bold">Create Product</h1>
				<Separator className="my-3" />
				{categoriesData.categories !== null && brandsData.brands !== null && (
					<CreateProductForm
						categories={categoriesData.categories}
						brands={brandsData.brands}
					/>
				)}
			</div>
		);
};
export default page;
