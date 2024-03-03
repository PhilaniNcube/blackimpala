import { getProductById } from "@/lib/fetchers/products";


const DashboardProductPage = async ({id}:{id:number}) => {

  const { product, error } = await getProductById(id);

  if (error || product === null) {
    return <div>There was an error fetching the product</div>;
  }

  return <div className="w-full">
       <h1 className="text-2xl font-bold">{product.name}</h1>

  </div>;
};
export default DashboardProductPage;
