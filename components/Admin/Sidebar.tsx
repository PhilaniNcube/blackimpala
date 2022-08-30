import { useUser } from '@supabase/auth-helpers-react';
import Link from 'next/link'
import { Fragment } from 'react';
import { MdAccountTree, MdOutlineLogout, MdShoppingBag, MdShoppingCart, MdSpaceDashboard, MdSupervisedUserCircle, MdVerifiedUser } from "react-icons/md";


const Sidebar = () => {


  const {user } = useUser()

  return (
    <aside
      className="bg-slate-200 max-w-lg w-72 isolate relative flex flex-col border-r border-slate-300"
      id="sidebar"
    >
      <div className="fixed top-12 left-0 w-72">
        <div
          className="h-16 flex items-center bg-slate-100 shadow py-2 justify-center"
          id="top"
        >
          <span>
            <img
              src="/images/black-logo.png"
              alt="logo"
              className="h-12 object-cover"
            />
          </span>
        </div>
        <div className="py-2  shadow" id="center">
          <ul>
            <Link passHref href="/admin">
              <li className="flex hover:bg-slate-300 px-3 cursor-pointer items-center py-2 w-full">
                <Fragment>
                  <MdAccountTree className="text-slate-700 h-8 w-8" />
                  <span className="flex space-x-2 text-lg pl-2 font-medium text-slate-700 items-center">
                    Admin Dashboard
                  </span>
                </Fragment>
              </li>
            </Link>
            <Link passHref href="/admin/products">
              <li className="flex hover:bg-slate-300 px-3 cursor-pointer items-center py-2 w-full">
                <Fragment>
                  <MdShoppingBag className="text-slate-700 h-8 w-8" />
                  <span className="flex space-x-2 text-lg pl-2 font-medium text-slate-700 items-center">
                    Products
                  </span>
                </Fragment>
              </li>
            </Link>
            <Link passHref href="/admin/orders">
              <li className="flex hover:bg-slate-300 px-3 cursor-pointer items-center py-2 w-full">
                <Fragment>
                  <MdShoppingCart className="text-slate-700 h-8 w-8" />
                  <span className="flex space-x-2 text-lg pl-2 font-medium text-slate-700 items-center">
                    Orders
                  </span>
                </Fragment>
              </li>
            </Link>
            <Link passHref href="/admin/customers">
              <li className="flex hover:bg-slate-300 px-3 cursor-pointer items-center py-2 w-full">
                <Fragment>
                  <MdSupervisedUserCircle className="text-slate-700 h-8 w-8" />
                  <span className="flex space-x-2 text-lg pl-2 font-medium text-slate-700 items-center">
                    Customers
                  </span>
                </Fragment>
              </li>
            </Link>
            <Link passHref href="/admin/categories">
              <li className="flex hover:bg-slate-300 px-3 cursor-pointer items-center py-2 w-full">
                <Fragment>
                  <MdSpaceDashboard className="text-slate-700 h-8 w-8" />
                  <span className="flex space-x-2 text-lg pl-2 font-medium text-slate-700 items-center">
                    Categories
                  </span>
                </Fragment>
              </li>
            </Link>
          </ul>
        </div>
        <div className="" id="bottom">
          {user && (
            <div className="py-2">
              <Link passHref href="/api/auth/logout">
                <li className="flex hover:bg-slate-300 px-3 cursor-pointer items-center py-2 w-full">
                  <Fragment>
                    <MdOutlineLogout className="text-slate-700 h-8 w-8" />
                    <span className="flex space-x-2 text-lg pl-2 font-medium text-slate-700 items-center">
                      Logout
                    </span>
                  </Fragment>
                </li>
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
