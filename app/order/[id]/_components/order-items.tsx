"use client"

import { Badge } from "@/components/ui/badge";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import type { OrderItem } from "@/schema";

export const OrderItems = ({order_items}:{order_items: OrderItem[]}) => {

  return (
			<Card>
				<CardHeader className="">
					<CardTitle>Order Items</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="max-w-[150px]">Name</TableHead>
								<TableHead>Quantity</TableHead>
								<TableHead>Total</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{order_items.map((item) => (
								<TableRow key={item.product.id}>
									<TableCell className="font-medium">
										{item.product.name}
									</TableCell>
									<TableCell>{item.quantity}</TableCell>
									<TableCell>
										<p suppressHydrationWarning>{formatCurrency(item.product.price * item.quantity)}</p>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		);
};
