"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon, MoveRightIcon, OutdentIcon } from "lucide-react";
import { useState } from "react";

import type { User } from "@supabase/supabase-js";
import { Button } from "../ui/button";
import { logout } from "@/action/auth";

const MobileSlide = ({user}:{user:User | null}) => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-row items-center space-x-3">
			{user ? (
				<form action={logout}>
					<Button className="" variant="destructive" size="sm" type="submit">
						<MoveRightIcon className="w-4 h-4 mr-1" />
						Logout
					</Button>
				</form>
			) : (
				<Link href="/login">
					<Button className="bg-white text-black" size="sm">
						Login
					</Button>
				</Link>
			)}

			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger>
					<MenuIcon />
				</SheetTrigger>
				<SheetContent>
					<div
						className="px-4 text-black flex flex-col"
						onClick={() => setIsOpen(false)}
						onKeyDown={() => setIsOpen(false)}
					>
						<Link
							href="/"
							className={cn(
								"text-lg font-medium",
								pathname === "/" ? "text-black" : "text-slate-950",
							)}
						>
							Home
						</Link>
						<Link
							href="/menu"
							className={cn(
								"text-lg font-medium",
								pathname === "/menu" ? "text-black" : "text-slate-950",
							)}
						>
							Menu
						</Link>
						<Link
							href="/events"
							className={cn(
								"text-lg font-medium",
								pathname === "/events" ? "text-black" : "text-slate-950",
							)}
						>
							Events
						</Link>
						<Link
							href="/order"
							className={cn(
								"text-lg font-medium",
								pathname === "/order" ? "text-black" : "text-slate-950",
							)}
						>
							Order
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
export default MobileSlide;
