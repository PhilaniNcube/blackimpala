import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { fetchOrderById } from "@/lib/fetchers/orders";
import { format } from "date-fns";
import { formatCurrency } from "@/lib/utils";
import { fetchProfileById } from "@/lib/fetchers/profiles";
import { OrderItems } from "./order-items";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function OrderDetails({id}:{id:string}) {

  const {data:order, error} = await fetchOrderById(id);



  if (error || !order) {
    return <div>Error: {error?.message || "Could not retrieve order information"}</div>;
  }

  const profile = await fetchProfileById(order.profile_id);

	return (
		<div className="grid items-start max-w-6xl gap-6 px-4 py-6 mx-auto md:grid-cols-2 lg:gap-12">
			<div className="grid gap-6">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle>Order Summary</CardTitle>
						<Badge>{order.order_status}</Badge>
					</CardHeader>
					<CardContent className="grid gap-2">
						<div className="flex items-center justify-between">
							<span>Order #</span>
							<span className="font-medium">{order.id.split("-")[0]}</span>
						</div>
						<div className="flex items-center justify-between">
							<span>Order Date</span>
							<span className="font-medium">
								{order.created_at
									? format(order.created_at?.toString(), "PPP")
									: null}
							</span>
						</div>
						<div className="flex items-center justify-between">
							<span>Total</span>
							<span className="font-medium">
								{order.order_amount ? formatCurrency(order.order_amount) : null}
							</span>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Customer Information</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-2">
						<div>
							<p className="font-medium">
								{profile?.first_name} {profile?.last_name}
							</p>
							<p className="font-medium">{order.phone_number}</p>
						</div>
						{order.order_status === "pending" ? (
							<form
								action="https://sandbox.payfast.co.za​/eng/process"
								method="POST"
							>
								<Input type="hidden" name="merchant_id" value="10000100" />
								<Input
									type="hidden"
									name="merchant_key"
									value="46f0cd694581a"
								/>
								<Input
									type="hidden"
									name="return_url"
									value={`${process.env.VERCEL_URL}/order/${order.id}/success`}
								/>
								<Input
									type="hidden"
									name="cancel_url"
									value={`${process.env.VERCEL_URL}/order/${order.id}/cancel`}
								/>
								<Input
									type="hidden"
									name="notify_url"
									value={`${process.env.VERCEL_URL}/api/order/${order.id}/notify`}
								/>
								<Input
									type="hidden"
									name="name_first"
									value={profile?.first_name}
								/>
								<Input
									type="hidden"
									name="name_last"
									value={profile?.last_name}
								/>
								<Input
									type="hidden"
									name="email_address"
									value={order.email ? order.email : ""}
								/>
								<Input
									type="hidden"
									name="cell_number"
									value={order.phone_number ? order.phone_number : ""}
								/>
								<Input
									type="hidden"
									name="amount"
									value={order.order_amount ? order.order_amount : 0}
								/>
								<Input type="hidden" name="item_name" value={order.id} />
								<Input type="hidden" name="m_payment_id" value={order.id} />
								<Button type="submit" className="w-full">
									Pay Now
								</Button>
							</form>
						) : null}

						{/* <div className="flex items-center justify-between">
							<span>Shipping Method</span>
							<span className="font-medium">Standard Shipping</span>
						</div>
						<div className="flex items-center justify-between">
							<span>Estimated Delivery</span>
							<span className="font-medium">June 27, 2022</span>
						</div> */}
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-6">
				<OrderItems order_items={order.order_items} />
				<Card>
					<CardHeader>
						<CardTitle>Order Total</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="flex items-center justify-between">
							<span>Subtotal</span>
							<span>
								{order.order_amount ? formatCurrency(order.order_amount) : null}
							</span>
						</div>
						{/* <div className="flex items-center justify-between">
							<span>Shipping</span>
							<span>$0.00</span>
						</div> */}
						{/* <div className="flex items-center justify-between">
							<span>Taxes</span>
							<span>$0.00</span>
						</div> */}
						<Separator />
						<div className="flex items-center justify-between font-medium">
							<span>Total</span>
							<span>
								{order.order_amount ? formatCurrency(order.order_amount) : null}
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
