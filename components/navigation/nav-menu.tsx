"use client";

import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import React from "react";
import Link from "next/link";
import { Database } from "@/schema";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/providers/cart-store-provider";



const NavMenu = () => {

const pathname = usePathname()




	return (
		<NavigationMenu>
			<NavigationMenuList className="bg-black">
				<NavigationMenuItem className="bg-black">
					<Link
						href="/"
						legacyBehavior
						passHref
						className={cn(
							"bg-black",
							pathname === "/" ? "text-white" : "text-slate-200",
						)}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="bg-black">
					<Link
						href="/menu"
						legacyBehavior
						passHref
						className={cn(
							"bg-black",
							pathname === "/menu" ? "text-white" : "text-slate-200",
						)}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Menu
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="bg-black">
					<Link
						href="/events"
						legacyBehavior
						passHref
						className={cn(
							"bg-black",
							pathname === "/events" ? "text-white" : "text-slate-200",
						)}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Events
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* <NavigationMenuItem className="bg-black">
					<Link
						href="/about"
						legacyBehavior
						passHref
						className={cn(
							"bg-black",
							pathname === "/about" ? "text-white" : "text-slate-200",
						)}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							About Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem> */}
				<NavigationMenuItem className="bg-black">
					<Link
						href="/contact"
						legacyBehavior
						passHref
						className={cn(
							"bg-black",
							pathname === "/contact" ? "text-white" : "text-slate-200",
						)}
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Contact Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavMenu;


