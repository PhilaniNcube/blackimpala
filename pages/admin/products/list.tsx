import { Switch } from "@headlessui/react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useMutation, useQuery , useQueryClient} from "@tanstack/react-query";
import { format } from "date-fns";
import Link from "next/link";
import { Fragment } from "react";
import CustomerWidget from "../../../components/Admin/CustomerWidget";
import OrdersWidget from "../../../components/Admin/OrdersWidget";
import ProductsWidget from "../../../components/Admin/ProductsWidget";
import Sidebar from "../../../components/Admin/Sidebar";
import getProducts from "../../../fetchers/getProducts";
import { Product } from "../../../types";


const Admin = ({products}: {products: Product[]}) => {

  const queryClient = useQueryClient()

  const {isLoading, isSuccess, error, data} = useQuery( ['products'], getProducts, {
    initialData: products,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  })

  const toggleInStock = (product:Product ) => {

    return supabaseClient.from('products').update({instock: !product.inStock}).eq('id', product.id).single()

  }

  const mutation = useMutation( async (product: Product) => {
    return await supabaseClient
      .from("products")
      .update({ inStock: !product.inStock })
      .eq("id", product.id)
      .single();
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    }
  })

  return (
    <Fragment>
      <main className="flex ">
        <Sidebar />
        <div className="flex-1 px-4 max-w-[1540px] ">
          <div className="flex justify-start">
            <Link href="/admin/products/add">
              <a className="bg-sky-700 px-16 py-2 rounded-lg text-white font-medium mt-6">
                Add A Product
              </a>
            </Link>
          </div>
          <div className="my-8">
            <>
              <div className="sm:px-6 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                  <div className="lg:flex items-center justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                      Products
                    </p>
                  </div>
                </div>
                <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead>
                      <tr className="h-20 w-full text-sm leading-none text-gray-600">
                        <th className="font-normal text-left pl-4">#</th>
                        <th className="font-normal text-left pl-11">
                          Product Title
                        </th>
                        <th className="font-normal text-left pl-10">Price</th>

                        <th className="font-normal text-left">Category</th>
                        <th className="font-normal text-left">In Stock</th>
                        <th className="font-normal text-left w-32">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {data?.map((product, i) => (
                        <tr
                          key={product.id}
                          className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                        >
                          <td className="pl-4">{i + 1}</td>
                          <td className="pl-11">
                            <div className="flex items-center">
                              <img
                                className="shadow-md  object-cover  h-10 mr-3"
                                src={product.image}
                              />
                              {product.name}
                            </div>
                          </td>
                          <td>
                            <p className="mr-16 text-lg font-medium pl-10">
                              R{product.price}
                            </p>
                          </td>

                          <td>
                            <p className="mr-16">{product.category.title}</p>
                          </td>
                          <td>
                            <Switch
                              checked={product.inStock}
                              onChange={() => mutation.mutateAsync(product)}
                              className={`${
                                product.inStock ? "bg-teal-600" : "bg-red-600"
                              }
          relative inline-flex h-[28px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                              <span className="sr-only">Use setting</span>
                              <span
                                aria-hidden="true"
                                className={`${
                                  product.inStock ? "translate-x-9" : "translate-x-0"
                                }
            pointer-events-none inline-block h-[25px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <Link href={`/admin/products/${product.id}`}>
                                <a className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                                  Edit Product
                                </a>
                              </Link>

                              <div className="relative px-5 pt-2"></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Admin;


export async function getServerSideProps() {

const products = await getProducts();

  return {
    props: {
      products
    }
  }
}
