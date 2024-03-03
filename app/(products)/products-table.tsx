import { getProducts } from "@/lib/fetchers/products";
import ProductsTableList from "./products-table-list";

const ProductsTable = async ({page}:{page:number}) => {

  const limit = 20;

  const { products, error, count } = await getProducts(page, limit);

  console.log({products, error, count});

  // find the total number of pages
  const totalPages = Math.ceil(count / limit);

  if (error || products === null) {
    return <div>{error}</div>;
  }

  return <div>
   <ProductsTableList products={products} totalPages={totalPages} />
  </div>;
};
export default ProductsTable;
