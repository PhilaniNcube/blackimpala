import { useUser } from "@supabase/auth-helpers-react";
import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { RiMenuFill, RiShoppingBagLine } from "react-icons/ri";

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
    <header>
      {/**Desktop Menu */}
      <div className="max-w-7xl mx-auto py-2 md:flex items-center justify-between hidden">
        <Link href="/" passHref>
          <img
            src="/images/black-logo.png"
            alt="logo"
            className="h-12 w-12 object-cover"
          />
        </Link>
        <div className="flex items-enter">
          <nav className="flex items-center space-x-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={`font-medium ${
                    item.active ? "text-sky-600" : "text-slate-600"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 ml-12 items-center">
            {user ? (
              <Fragment>
                {authLinks.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <a className="text-md px-4 py-1  rounded bg-gray-600 text-white">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                {signInLinks.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <a className="text-md px-4 py-1 rounded bg-gray-600 text-white">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </Fragment>
            )}
            <Link href="/cart">
              <a className="flex items-center cursor-pointer font-medium text-slate-600">
                <RiShoppingBagLine className="text-slate-700 h-8 w-8" />

              </a>
            </Link>
          </div>
        </div>
      </div>

      {/**Mobile Menu Goes Here */}
      <div className="w-[90%] mx-auto flex md:hidden py-2 justify-between ">
        <Link href="/" passHref>
          <img src="/images/black-logo.png" alt="logo" className="h-12 w-12" />
        </Link>
        <span className="flex items-center">
          <Link href="/cart">
            <a>
              <RiShoppingBagLine className="text-slate-700 pr-2 h-10 w-10" />
            </a>
          </Link>
          <RiMenuFill
            className="text-slate-700 h-10 w-10"
            onClick={() => setOpen(!open)}
          />
        </span>

        <AnimatePresence exitBeforeEnter>
          {open && (
            <Fragment>
              <motion.div
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gray-200 w-4/6"
              >
                <nav className="w-full flex flex-col py-16 px-2">
                  {navItems.map((item) => (
                    <span
                      key={item.name}
                      className={`rounded px-2 text-xl list-none ${
                        item.active
                          ? "bg-gray-600 text-white"
                          : "text-slate-800"
                      } `}
                    >
                      <Link href={item.href}>
                        <a className="text-md font-medium">{item.name}</a>
                      </Link>
                    </span>
                  ))}
                </nav>
                <nav className="w-full flex flex-col py-16 px-2">
                  {user ? (
                    <Fragment>
                      {authLinks.map((item) => (
                        <span
                          key={item.name}
                          className={`rounded px-2 text-xl list-none ${
                            item.active
                              ? "bg-gray-600 text-white"
                              : "text-slate-800"
                          } `}
                        >
                          <Link href={item.href}>
                            <a className="text-md font-medium">{item.name}</a>
                          </Link>
                        </span>
                      ))}
                    </Fragment>
                  ) : (
                    <Fragment>
                      {signInLinks.map((item) => (
                        <span
                          key={item.name}
                          className={`rounded px-2 text-xl list-none ${
                            item.active
                              ? "bg-gray-600 text-white"
                              : "text-slate-800"
                          } `}
                        >
                          <Link href={item.href}>
                            <a className="text-md font-medium">{item.name}</a>
                          </Link>
                        </span>
                      ))}
                    </Fragment>
                  )}
                </nav>
              </motion.div>
            </Fragment>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
export default Navbar;
