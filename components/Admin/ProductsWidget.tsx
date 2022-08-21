import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { MdOutlineArrowCircleUp, MdShoppingBag, MdSupervisedUserCircle } from "react-icons/md";
import getProducts from "../../fetchers/getProducts";

const ProductsWidget = () => {


   const { isLoading, isSuccess, error, data } = useQuery(
     ["products"],
     getProducts,
     {

       refetchOnMount: true,
       refetchOnWindowFocus: true,
     }
   );


  return (
    <div
      className="flex px-5 py-5 flex-1 justify-between bg-slate-200 rounded-lg"
      id="widget"
    >
      <div className="flex flex-col">
        <span id="title" className="font-bold text-slate-600 text-lg">
          Products
        </span>
        <span id="data" className="text-2xl text-slate-700 font-bold">
         {isLoading ? "Loading..." : `${data?.length}`}
        </span>
        <Link href="/admin/products">
          <span
            id="link"
            className="hover:underline cursor-pointer text-slate-800 font-medium"
          >
            See all products
          </span>
        </Link>
      </div>
      <div className="flex flex-col">
        <span id="precentage">
          <MdOutlineArrowCircleUp className="h-8 w-8 text-slate-400" /> 20%
        </span>
        <MdShoppingBag className="h-8 w-8 text-slate-400" />
      </div>
    </div>
  );
};
export default ProductsWidget;
