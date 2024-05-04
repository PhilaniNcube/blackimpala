"use client";

import { useCartStore } from "@/providers/cart-store-provider";
import { ShoppingBasket, XIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { formatCurrency } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const CartNav = () => {
	const { cart, cartIsOpen, closeCart, openCart, removeFromCart } =
		useCartStore((state) => state);

	// calculate the total quantity of items in the cart
	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	// calculate the total price of items in the cart
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0,
	);

	const router = useRouter();

	async function toggleCart() {
		if (cartIsOpen) {
			closeCart();
		} else {
			openCart();
		}
	}

	return (
		<Sheet open={cartIsOpen} onOpenChange={toggleCart}>
			<SheetTrigger className="relative">
				<ShoppingBasket onClick={toggleCart} size={24} />
				{totalQuantity > 0 ? (
					<span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
						{totalQuantity}
					</span>
				) : null}
			</SheetTrigger>
			<SheetContent side="right">
				<div className="min-w-[200px] flex flex-col h-full">
					<h3 className="text-xl font-semibold">Cart</h3>
					<Separator className="my-2" />
					{cart.length > 0 ? (
						<div className="flex flex-col h-full">
							{cart.map((item) => {
								return (
									<div key={item.product.id}>
										<div className="flex items-start justify-between">
											<div className="flex flex-col">
												<span>{item.product.name}</span>
												<span>qty {item.quantity}</span>
											</div>
											<div className="flex flex-col">
												<span>
													{formatCurrency(item.product.price * item.quantity)}
												</span>
												<Button
													size="sm"
													variant="ghost"
													onClick={() => removeFromCart(item.product)}
												>
													<XIcon className="text-red-600" size={16} />
												</Button>
											</div>
										</div>
										<Separator className="my-2" />
									</div>
								);
							})}
							<div className="flex items-center justify-between">
								<span>Total</span>
								<span>{formatCurrency(totalPrice)}</span>
							</div>
							<div className="flex items-end flex-1 h-full mt-8">
								<Button
									onClick={() => {
                    startTransition(() => {
                      router.push("/checkout");
                      closeCart();
                    });
									}}
									className="w-full"
								>
									Checkout
								</Button>
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center">
							Your cart is empty
						</div>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};
export default CartNav;
