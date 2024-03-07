import { getProductById } from "@/lib/fetchers/products";
import UpdateProductForm from "./update-product-form";
import { getCategories } from "@/lib/fetchers/categories";
import { getBrands } from "@/lib/fetchers/brands";


const DashboardProductPage = async ({id}:{id:number}) => {

  const { product, error } = await getProductById(id);
const categoriesPromise = getCategories();
		const brandsPromise = getBrands();

		const [categoriesData, brandsData] = await Promise.all([
			categoriesPromise,
			brandsPromise,
		]);

  if (error || product === null || categoriesData.error !== null || brandsData.error !== null || categoriesData.categories === null || brandsData.brands === null) {
    return <div>There was an error fetching the product</div>;
  }

  return (
			<div className="w-full">
				<h1 className="text-2xl font-bold">{product.name}</h1>
				<UpdateProductForm product={product} categories={categoriesData.categories} brands={brandsData.brands || []} />
			</div>
		);
};
export default DashboardProductPage;
