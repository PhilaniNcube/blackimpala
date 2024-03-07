"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Database } from "@/schema";
import { useFormState } from "react-dom";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { updateProduct } from "@/action/products";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { SubmitButton } from "@/components/submit-button";
import { useRef } from "react";

const updateProductSchema = z.object({
	name: z.string().min(3).trim(),
	price: z.coerce.number(),
	description: z.string().min(3).trim(),
	stock: z.coerce.number(),
	category_id: z.string(),
	brand_id: z.string().optional(),
  status: z.string(),
  product_id: z.string(),
});

type CreateProductFormProps = {
	categories: Database["public"]["Tables"]["categories"]["Row"][];
	brands: Database["public"]["Tables"]["brands"]["Row"][];
  product: Database["public"]["Tables"]["products"]["Row"];
};

const initialState = {
	message: "",
};

const UpdateProductForm = ({ categories, brands, product }: CreateProductFormProps) => {
	const formRef = useRef<HTMLFormElement>(null);

	const [state, formAction] = useFormState(updateProduct, initialState);

	const form = useForm<z.infer<typeof updateProductSchema>>({
		resolver: zodResolver(updateProductSchema),
		defaultValues: {
			name: product.name,
			price: product.price,
			description: product.description,
			stock: product.stock,
      category_id: product.category_id.toString(),
      brand_id: product.brand_id?.toString(),
      status: product.status,
      product_id: product.id.toString(),
		},
	});

	async function onSubmit(data: z.infer<typeof updateProductSchema>) {
		await formRef?.current?.requestSubmit();
		formRef?.current?.reset();
	}

	return (
		<div className="w-full px-6">
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-2">
					<h2 className="text-xl font-bold">Add product information</h2>
					<Form {...form}>
						<form
							// ref={formRef}
							// onSubmit={form.handleSubmit(() =>
							// 	formRef?.current?.requestSubmit(),
							// )}
							action={formAction}
							className="w-full"
						>
							<div className="grid grid-cols-2 gap-4 mb-4">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Product Name</FormLabel>
											<FormControl>
												<Input placeholder="" {...field} />
											</FormControl>
											<FormDescription>
												This title of the product
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="product_id"
									render={({ field }) => (
										<FormItem hidden={true}>
											<FormLabel>Product Id</FormLabel>
											<FormControl>
												<Input type="hidden"  placeholder="" {...field} />
											</FormControl>
											<FormDescription>
												This title of the product
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Price</FormLabel>
											<FormControl>
												<Input type="number" placeholder="" {...field} />
											</FormControl>
											<FormDescription>
												This is price of the product
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<Separator className="mb-2" />
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Product description</FormLabel>
										<FormControl>
											<Textarea
												placeholder=""
												className="resize-none"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											Add a description to the product
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Separator className="my-3" />
							<div className="grid grid-cols-3 gap-3">
								<FormField
									control={form.control}
									name="stock"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Stock On Hand</FormLabel>
											<FormControl>
												<Input type="number" placeholder="" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="category_id"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<Select
												name="category_id"
												onValueChange={field.onChange}
												defaultValue={String(field.value)}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a category" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{categories.map((category) => (
														<SelectItem
															key={category.id}
															value={String(category.id)}
														>
															{category.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="brand_id"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Brand</FormLabel>
											<Select
												name="brand_id"
												onValueChange={field.onChange}
												defaultValue={String(field.value)}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a brand" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{brands.map((brand) => (
														<SelectItem key={brand.id} value={String(brand.id)}>
															{brand.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="status"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Status</FormLabel>
											<Select
												name="status"
												onValueChange={field.onChange}
												defaultValue={String(field.value)}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select product status" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="active">Active</SelectItem>
													<SelectItem value="draft">Draft</SelectItem>
												</SelectContent>
											</Select>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<Separator className="my-3" />
							<SubmitButton
								className="w-full sm:w-2/3 lg:w-1/3"
								pendingText="Saving..."
							>
								Save Product
							</SubmitButton>
							<FormMessage>{state.message}</FormMessage>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};
export default UpdateProductForm;
