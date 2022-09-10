import { Fragment } from "react";
import Chart from "../../components/Admin/Chart";
import CustomerWidget from "../../components/Admin/CustomerWidget";
import Featured from "../../components/Admin/Featured";
import OrdersWidget from "../../components/Admin/OrdersWidget";
import ProductsWidget from "../../components/Admin/ProductsWidget";
import Sidebar from "../../components/Admin/Sidebar";
import Widget from "../../components/Admin/Widget";

const Admin = () => {
  return (
    <Fragment>
      <main className="flex ">
        <Sidebar />
        <div className="flex-1 px-5 max-w-[1540px] ">
          <div className="flex items-center gap-5 mt-6 ">
            <CustomerWidget />
            <ProductsWidget />
            <OrdersWidget />
          </div>
          <div id="charts" className="mt-5 min-h-screen grid grid-cols-7 gap-5">
            <Featured />
            <Chart />
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Admin;
