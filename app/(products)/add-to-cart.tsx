"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/providers/cart-store-provider";
import type { Database } from "@/schema";
import { PlusIcon } from "lucide-react";

type AddToCartProps = {
  product: Database['public']['Tables']['products']['Row'];
}

const AddToCart = ({product}:AddToCartProps) => {
	const { addToCart } = useCartStore((state) => state);

	return (
		<Button onClick={() => addToCart(product)} type="button">
			<PlusIcon /> Add to Cart
		</Button>
	);
};
export default AddToCart;
