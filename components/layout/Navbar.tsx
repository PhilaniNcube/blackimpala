import { useUser } from "@supabase/auth-helpers-react";
import {AnimatePresence, motion} from "framer-motion"
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import {  RiMenu2Line, RiShoppingBag3Line } from "react-icons/ri";
import { useShoppingCart } from "../../context/ShoppingCartContext";



const Navbar = () => {

  const [open, setOpen] = useState(false)



  const {cartQuantity, openCart} = useShoppingCart()

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
    <nav className="w-full items-center flex bg-slate-800  z-50" id="app__navbar">
      {/**Desktop Nav** **/}
      <div className="hidden max-w-7xl mx-auto w-full md:flex justify-between py-2 px-4">
        <div id="logo">
          <h3 className="text-slate-50 text-xl font-bold font-brand">
            Black Impala
          </h3>
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
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <RiShoppingBag3Line
                onClick={openCart}
                className="text-white h-8 w-8 cursor-pointer"
              />
              <AnimatePresence exitBeforeEnter initial={false}>
                {cartQuantity > 0 && (
                  <motion.span
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute rounded-full h-5 w-5 flex pointer-events-none justify-center items-center top-0 right-0 bg-red-500 text-white"
                  >
                    {cartQuantity}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/****Mobile Nav***/}
      <div className="flex md:hidden justify-between w-full px-4 py-2">
        <Link href="/">
          <a className="text-slate-200 font-brand text-lg">Black Impala</a>
        </Link>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <RiShoppingBag3Line
              onClick={openCart}
              className="text-white h-8 w-8 cursor-pointer"
            />{" "}
            <AnimatePresence exitBeforeEnter initial={false}>
              {cartQuantity > 0 && (
                <motion.span
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute rounded-full h-5 w-5 pointer-events-none flex justify-center items-center top-0 right-0 bg-red-500 text-white"
                >
                  {cartQuantity}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <RiMenu2Line
            onClick={() => setOpen(!open)}
            className="h-8 w-8 text-slate-200 object-cover"
          />
        </div>

        <AnimatePresence exitBeforeEnter initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900 absolute inset-0 w-1/2 h-screen z-20 flex flex-col"
            >
              {navItems.map((item, i) => (
                <Link key={i} href={item.href}>
                  <a
                    onClick={() => setOpen(false)}
                    className={`w-full px-4 py-2 text-slate-200 ${
                      item.active ? "bg-black" : "bg-transparent"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default dynamic(() => Promise.resolve(Navbar), {ssr: false});
