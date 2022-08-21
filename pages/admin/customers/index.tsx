import { Fragment } from "react";
import Sidebar from "../../../components/Admin/Sidebar";

const Admin = () => {
  return (
    <Fragment>
      <main className="flex ">
        <Sidebar />
        <div className="flex-1 px-5 max-w-[1540px]">Customers</div>
      </main>
    </Fragment>
  );
};
export default Admin;
