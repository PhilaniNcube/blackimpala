import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { is_admin } from "@/lib/fetchers/auth";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import Link from "next/link";
import { BoxIcon, PartyPopperIcon, ShoppingBagIcon } from "lucide-react";

const DashboardLayout = async ({children}:{children:ReactNode}) => {

    const admin = await is_admin();

				if (!admin) {
					redirect("/");
				}

				return (
					<div className="flex w-full h-[calc(100vh-64px)] overflow-y-hidden">
						<aside className="flex flex-col w-1/5 h-full text-white bg-black">
							<h2 className="px-4 py-4 text-lg font-medium">Admin Dashboard</h2>
							<Separator />
							<div className="flex flex-col py-6 space-y-2">
								<Link
									className="flex items-center w-full px-3 py-2 space-x-2 hover:text-slate-200 hover:bg-slate-800"
									href="/dashboard/products"
								>
									<BoxIcon className="pr-2" /> Products
								</Link>
								<Link
									className="flex items-center w-full px-3 py-2 space-x-2 hover:text-slate-200 hover:bg-slate-800"
									href="/dashboard/orders"
								>
									<ShoppingBagIcon className="pr-2" /> Orders
								</Link>
								<Link
									className="flex items-center w-full px-3 py-2 space-x-2 hover:text-slate-200 hover:bg-slate-800"
									href="/dashboard/events"
								>
									<PartyPopperIcon className="pr-2" /> Events
								</Link>
							</div>
						</aside>
						<div className="flex-1">
							<ScrollArea className="h-[calc(100vh-64px)] px-4 py-5">
								{children}
								<ScrollBar />
							</ScrollArea>
						</div>
					</div>
				);
};
export default DashboardLayout;
