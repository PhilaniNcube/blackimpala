import { useUser } from "@supabase/auth-helpers-react";
import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { RiMenuFill, RiShoppingBagLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const router = useRouter()

  const navItems = [
    {
      name: "Home",
      href: "/",
      active: router.asPath === "/",
    },
    {
      name: "Menu",
      href: "/menu",
      active: router.asPath === "/menu",
    },
    {
      name: "Events",
      href: "/events",
      active: router.asPath === "/events",
    },
    {
      name: "Contact Us",
      href: "/contact",
      active: router.asPath === "/contact",
    },
  ];


  const authLinks = [
    {
      name: "Account",
      href: "/account",
      active: router.asPath === "/account",
    },
    {
      name: "Logout",
      href: "/api/auth/logout",
      active: router.asPath === "/api/auth/logout",
    },
  ];

  const signInLinks = [
    {
      name: "Sign In",
      href: "/sign-in",
      active: router.asPath === "/sign-in",
    },
    {
      name: "Register",
      href: "/register",
      active: router.asPath === "/register",
    },
  ];

  const {user} = useUser()

  return (
    <nav className="w-full items-center flex bg-slate-800" id="app__navbar">
      {/**Desktop Nav** **/}
      <div className="hidden max-w-7xl mx-auto w-full md:flex justify-between py-2 px-4">
        <div id="logo">
          <h3 className="text-slate-50 text-xl font-bold font-brand">Black Impala</h3>
        </div>

        <ul className="flex space-x-3 items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.li
                id="link"
                className={`text-md transition-all cursor-pointer ${
                  item.active
                    ? "text-white underline underline-offset-2"
                    : "text-slate-300"
                }`}
              >
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>

        <div className="flex items-center space-x-3 border-r border-slate-400 pr-3">
          {user ? (
            <Fragment>
              {authLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className={`text-md transition-all cursor-pointer ${
                      link.active
                        ? "text-white underline underline-offset-2"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {signInLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className={`text-md transition-all cursor-pointer ${
                      link.active
                        ? "text-white underline underline-offset-2"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
