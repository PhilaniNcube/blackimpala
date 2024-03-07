"use client"

import { updateProductStatus } from "@/action/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Database } from "@/schema";
import {
	ColumnDef,

} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<
	Database["public"]["Tables"]["products"]["Row"]
>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Name
					<ChevronDown className="w-4 h-4 ml-2" />
				</Button>
			);
		},
		cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
	},
	{
		accessorKey: "price",
		header: () => <div className="text-right">Price</div>,
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("price"));

			// Format the price as a dollar price
			const formatted = new Intl.NumberFormat("en-ZA", {
				style: "currency",
				currency: "ZAR",
			}).format(price);

			return (
				<div className="font-medium text-right" suppressHydrationWarning>
					{formatted}
				</div>
			);
		},
	},
	{
		accessorKey: "stock",
		header: "Stock",
		cell: ({ row }) => {
			const stock = parseInt(row.getValue("stock"));
			return <div className="">{stock}</div>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {

      const { id, status } = row.original;


      return (
							<div className="capitalize">
								{status === "active" ? (
									<Badge
										variant="default"
										className="text-white bg-green-500 cursor-pointer"
										onClick={async () => {
											await updateProductStatus(id, "draft");
										}}
									>
										{status}
									</Badge>
								) : (
									<Badge
										className="text-white bg-red-600 cursor-pointer"
										onClick={async () => {
											await updateProductStatus(id, 'active');
										}}
										variant="destructive"
									>
										{status}
									</Badge>
								)}
							</div>
						);
    },
	},
	{
		accessorKey: "id",
		header: "View Product",
		cell: ({ row }) => {



			return (

				<Link href={`/dashboard/products/${row.getValue("id")}`}>
					<Button size="sm" variant="outline">
						View
					</Button>
				</Link>
			);
		},
	},
];
