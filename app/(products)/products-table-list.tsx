"use client"

import { Database } from "@/schema";
import { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { columns } from "./products-columns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProductsTableListProps = {
  products: Database["public"]["Tables"]["products"]["Row"][];
  totalPages: number;

};




const ProductsTableList = ({ products, totalPages }: ProductsTableListProps) => {

  const [sorting, setSorting] = useState<SortingState>([]);
		const [columnFilters, setColumnFilters] =
			useState<ColumnFiltersState>([]);

		const searchParams = useSearchParams();

		const page = Number(searchParams.get("page") || 1);

      const [columnVisibility, setColumnVisibility] =
			useState<VisibilityState>({});
		  const [rowSelection, setRowSelection] = useState({});

      const table = useReactTable({
							data: products,
							columns: columns,
							onSortingChange: setSorting,
							onColumnFiltersChange: setColumnFilters,
							getCoreRowModel: getCoreRowModel(),
							// getPaginationRowModel: getPaginationRowModel(),
              manualPagination: true,
							getSortedRowModel: getSortedRowModel(),
							getFilteredRowModel: getFilteredRowModel(),
							onColumnVisibilityChange: setColumnVisibility,
							onRowSelectionChange: setRowSelection,
							state: {
								sorting,
								columnFilters,
								columnVisibility,
								rowSelection,
							},
						});

		return (
			<div>
				<div>
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext(),
													  )}
											</TableHead>
										);
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										// data-state={row.getIsSelected() && "selected"}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center"
									>
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<div className="space-x-2">
          <Button variant="outline" size="sm" disabled={page <= 1}>
					<Link
						href={{
							pathname: "/dashboard/products",
							query: { page: page - 1 },
						}}
					>
							Prev
					</Link>
						</Button>
          <Button variant="outline" size="sm" disabled={page === totalPages}>
					<Link href={{
              pathname: "/dashboard/products",
              query: { page: page + 1 },
          }}>
							Next
					</Link>
						</Button>
				</div>
			</div>
		);
};
export default ProductsTableList;
