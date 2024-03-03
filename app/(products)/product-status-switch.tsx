"use client"

import { updateProductStatus } from "@/action/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useOptimistic } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


const initialState = {
  message: "",
}

type ProductStatusSwitchProps = {
  product_id: number;
  status: "active" | "draft";
}

const ProductStatusSwitch = ({
	product_id,
	status,
}: ProductStatusSwitchProps) => {


    const [optimisticStatus, addOptimisticStatus] = useOptimistic<{
					status: "active" | "draft";
				}>(
          { status: status },

          )




	return (
		<div>
			<form
        onSubmit={() => {
          console.log("submit")
        }}
				// action={async (formData) => {
				// 	const status = formData.get("status") as "active" | "draft";
				// 	const productId = Number(formData.get("product_id"));
				// 	addOptimisticStatus({ status });
				// 	const { message } = await updateProductStatus(initialState, formData);
				// }}
			>
				<div className="flex flex-row space-x-3">
					<Switch
						id="status"
						name="status"
            checked={optimisticStatus.status === "active" ? true : false}
            onCheckedChange={async (checked) => {
              addOptimisticStatus({status: checked ? "active" : "draft"})
              const productId = product_id
              const formData = new FormData()
              formData.append("product_id", productId.toString())
              formData.append("status", checked ? "active" : "draft")
              await updateProductStatus(initialState, formData)
            }}
					/>
					<Label htmlFor="status">Product Status</Label>
				</div>
			</form>
		</div>
	);
};
export default ProductStatusSwitch;
