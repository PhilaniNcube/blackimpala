import { Fragment } from "react";
import Sidebar from "../../components/Admin/Sidebar";


const Admin = () => {
  return (
    <Fragment>
      <main className="flex ">
        <Sidebar />
        <div className="flex-1 bg-blue-200 max-w-[1540px] ">Account</div>
      </main>
    </Fragment>
  );
};
export default Admin;
