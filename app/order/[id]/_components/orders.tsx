import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { FilterIcon, MoveHorizontalIcon, SearchIcon } from "lucide-react"
import { createClient } from "@/utils/supabase/server"
import { format, formatDate } from "date-fns"
import { formatCurrency } from "@/lib/utils"

export default async function Orders() {

  const supabase = createClient()

  const { data: orders, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false })


  return (
			<div className="px-4 py-8 mx-auto md:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-2xl font-bold">Your Orders</h1>
					<div className="flex items-center gap-4">
						<form className="relative w-full max-w-md">
							<SearchIcon className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 left-3 top-1/2 dark:text-gray-400" />
							<Input
								className="py-2 pl-10 pr-4 bg-white rounded-md dark:bg-gray-800 dark:text-gray-50"
								placeholder="Search orders..."
								type="search"
							/>
						</form>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button size="sm" variant="outline">
									<FilterIcon className="w-4 h-4 mr-2" />
									Filter
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<DropdownMenuLabel>Sort By</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuRadioGroup value="date">
									<DropdownMenuRadioItem value="date">
										Date
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="total">
										Total
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem value="status">
										Status
									</DropdownMenuRadioItem>
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Order #</TableHead>
								<TableHead>Date</TableHead>
								<TableHead>Total</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{error || orders.length === 0 || orders === null ? (
								<div className="flex items-center justify-center py-20">
									<p>Could not fetch any orders</p>
								</div>
							) : (
								orders.map((order) => (
									<TableRow key={order.id}>
										<TableCell>
											<Link className="font-medium" href="#">
												{order.id.split("-")[0]}
											</Link>
										</TableCell>
										<TableCell>
											{order.created_at
												? format(order.created_at?.toString(), "PPP")
												: null}
										</TableCell>
										<TableCell>
											{order.order_amount
												? formatCurrency(order?.order_amount)
												: null}
										</TableCell>
										<TableCell>
											<Badge>{order.order_status}</Badge>
										</TableCell>
										<TableCell className="text-right">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button size="icon" variant="ghost">
														<MoveHorizontalIcon className="w-4 h-4" />
														<span className="sr-only">Order actions</span>
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem>
														<Link href={`/order/${order.id}`}>View Order</Link>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
				</div>
			</div>
		);
}
