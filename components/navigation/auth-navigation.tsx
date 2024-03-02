"use client"
import { logout } from "@/action/auth";
import { User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { SubmitButton } from "../submit-button";

const AuthNavigation = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<User />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Account Menu</SheetTitle>
					<SheetDescription>Manage products and orders</SheetDescription>
				</SheetHeader>
				<Separator className="my-3" />
				<div className="flex flex-col h-full space-y-2">
					<Link href="/dashboard" className="">
						Dashboard
					</Link>
					<Link href="/dashboard/orders" className="">
						Orders
					</Link>
					<Link href="/dashboard/products" className="">
						Products
					</Link>
					<Separator className="my-3" />
					<form action={logout} className="flex flex-col justify-end w-full ">
						<SubmitButton className="w-full" pendingText="Logging Out..." variant="destructive">Log Out</SubmitButton>
					</form>
				</div>
			</SheetContent>
		</Sheet>
	);
};
export default AuthNavigation;
