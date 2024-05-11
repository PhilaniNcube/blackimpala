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
import { SubmitButton } from "@/components/submit-button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

const checkoutSchema = z.object({
	phone_number: z.string(),
	order_total: z.string(),
	name: z.string(),
	email: z.string(),
});

export default function Checkout() {
	const router = useRouter();

	const { cart } = useCartStore((state) => state);

	// calculate the total quantity of items in the cart
	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	// calculate the total price of items in the cart
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0,
	);

	const form = useForm<z.infer<typeof checkoutSchema>>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: {
			order_total: totalPrice.toString(),
		},
	});

	const onSubmit = async (values: z.infer<typeof checkoutSchema>) => {
		const supabase = createClient();

		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) {
			return;
		}

    console.log(values)

		const { data: order, error } = await supabase
			.from("orders")
			.insert([
				{
					profile_id: user.id,
					phone_number: values.phone_number,
					order_amount: Number(values.order_total),
					email: values.email,
					order_items: cart.map((item) => {
            return {
              product: item.product,
              quantity: item.quantity
            }
          }),
				},
			])
			.select("*").single();

		if (error || order === null) {
			console.error(error);
			toast("Could not save the order", {
				duration: 5000,
				position: "top-center",
			});
      return;
		}

		console.log(order, error);
		toast("Order saved successfully", {
			duration: 5000,
			position: "top-center",
		});

		router.push(`/order/${order.id}`);
	};

	return (
		<div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto md:grid-cols-2 md:px-6">
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold">Checkout</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Review your order and complete the purchase.
					</p>
					<p className="text-red-500 dark:text-gray-400">
						We are currently not doing deliveries. Please collect your order at
						our premises in Deal Party
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
			<Form {...form}>
				<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
					<Card>
						<CardHeader>
							<CardTitle>Order Information</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid gap-2">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="shadcn" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="grid gap-2">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input type="email" placeholder="" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<FormField
									control={form.control}
									name="phone_number"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<Input type="tel" placeholder="" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="order_total"
								render={({ field }) => (
									<FormItem className="hidden">
										<FormLabel>Order Total</FormLabel>
										<FormControl>
											<Input type="hidden" placeholder="" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Save Order</CardTitle>
						</CardHeader>

						<CardFooter>
							<Button type="submit" className="w-full">
								Save Order
							</Button>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</div>
	);
}
