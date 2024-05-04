"use client";

import {
	CardTitle,
	CardHeader,
	CardContent,
	Card,
	CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useCartStore } from "@/providers/cart-store-provider";
import { formatCurrency } from "@/lib/utils";
import { checkoutAction } from "@/action/checkout";
import { SubmitButton } from "@/components/submit-button";

export default function Checkout() {

  const { cart } = useCartStore((state) => state);

  // calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // calculate the total price of items in the cart
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );




	return (
		<div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto md:grid-cols-2 md:px-6">
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold">Checkout</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Review your order and complete the purchase.
					</p>
					<p className="text-red-500 dark:text-gray-400">
						We are currently not doing deliveries. Please collect your order at our premises in Deal Party
					</p>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Order Summary</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							{cart.map((item) => (
								<div
									key={item.product.id}
									className="flex items-center justify-between"
								>
									<div>
										<h3 className="font-medium">{item.product.name}</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Quantity: {item.quantity}
										</p>
									</div>
									<div className="font-medium">
										{formatCurrency(item.product.price * item.quantity)}
									</div>
								</div>
							))}

							<Separator />
							<div className="flex items-center justify-between font-medium">
								<div>Total</div>
								<div>{formatCurrency(totalPrice)}</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<form className="space-y-6" action={checkoutAction}>
				<Card>
					<CardHeader>
						<CardTitle>Order Information</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid gap-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" placeholder="First Last" />
						</div>

						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								placeholder="m@example.com"
								type="email"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="phone_number">Phone Number</Label>
							<Input
								id="phone_number"
                name="phone_number"
								placeholder=""
								type="text"
							/>
						</div>
            <input type="hidden" name="order_total" value={totalPrice} />
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Save Order</CardTitle>
					</CardHeader>

					<CardFooter>
						<SubmitButton className="w-full">Save Order</SubmitButton>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
