import { useQuery } from "@tanstack/react-query";
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

  const {isLoading, isSuccess, error, data} = useQuery( ['products'], getProducts, {
    initialData: products,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  })

  return (
    <Fragment>
      <main className="flex ">
        <Sidebar />
        <div className="flex-1 px-4 max-w-[1540px] ">
          <div className="flex items-center gap-5 mt-6 ">
            <ProductsWidget />
            <CustomerWidget />
            <OrdersWidget />
          </div>
          <div className="flex justify-start">
            <Link href="/admin/products/add">
              <a className="bg-sky-700 px-16 py-2 rounded-lg text-white font-medium mt-6">
                Add A Product
              </a>
            </Link>
          </div>
          <div className="mt-2">
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
                        <th className="font-normal text-left">Status</th>
                        <th className="font-normal text-left w-32">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {data?.map((product, i) => (
                        <tr
                          key={product.id}
                          className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                        >
                          <td className="pl-4">{i+1}</td>
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
                            <div
                              className={`w-20 h-6 flex items-center mr-16 justify-center rounded-full ${product.inStock ? 'bg-blue-200' : 'bg-red-200'}`}
                            >
                              <p
                                className={`text-xs leading-3 ${
                                  product.inStock
                                    ? "text-blue-800"
                                    : "text-red-700"
                                }`}
                              >
                                {product.inStock ? "In Stock" : "Out Of Stock"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                                Edit
                              </button>
                              <button className="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                                Call
                              </button>
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
