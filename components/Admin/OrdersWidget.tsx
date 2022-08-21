import Link from "next/link";
import {
  MdOutlineArrowCircleUp,
  MdShoppingBag,
  MdShoppingCart,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { format, compareAsc } from "date-fns";

const OrdersWidget = () => {



  return (
    <div
      className="flex px-5 py-5 flex-1 justify-between bg-slate-200 rounded-lg"
      id="widget"
    >
      <div className="flex flex-col">
        <span id="title" className="font-bold text-slate-600 text-lg">
          Orders
        </span>
        <span id="data" className="text-2xl text-slate-700 font-bold">
      R5000
        </span>
        <Link href="/admin/orders">
          <span
            id="link"
            className="hover:underline cursor-pointer text-slate-800 font-medium"
          >
            See all orders
          </span>
        </Link>
      </div>
      <div className="flex flex-col">
        <span id="precentage">
          <MdOutlineArrowCircleUp className="h-8 w-8 text-slate-400" /> 20%
        </span>
        <MdShoppingCart className="h-8 w-8 text-slate-400" />
      </div>
    </div>
  );
};
export default OrdersWidget;
