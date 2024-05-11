import { fetchOrderById } from "@/lib/fetchers/orders";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export default async function OrderSuccess({params:{id}}:{params:{id:string}}) {

  const {data:order, error} = await fetchOrderById(id);


  if (error || !order) {
    return <div>Error: {error?.message || "Could not retrieve order information"}</div>;
  }

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50">
						Thank You!
					</h1>
					<p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">
						Your order has been successfully placed.
					</p>
				</div>
				<div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg overflow-hidden">
					<div className="px-4 py-5 sm:px-6">
						<h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">
							Order Summary
						</h2>
					</div>
					<div className="border-t border-gray-200 dark:border-gray-800">
						<dl>
							<div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Order Number
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2">
									{order.id.split("-")[0]}
								</dd>
							</div>
							<div className="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Items
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2">
									<ul className="border-t border-gray-200 dark:border-gray-800 pt-4">
										{order.order_items ?
											order?.order_items.map((item) => (
												<li key={item.product.id} className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
													<div>
														<p className="font-medium">{item.product.name}</p>
														<p className="text-gray-500 dark:text-gray-400">
															Quantity: {item.quantity}
														</p>
													</div>
													<div className="text-gray-900 dark:text-gray-50 font-medium">
														{formatCurrency(item.product.price * item.quantity)}
													</div>
												</li>
											)) : null}
									</ul>
								</dd>
							</div>
							<div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Total
								</dt>
								<dd className="mt-1 text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2 font-medium">
									{order.order_amount ? formatCurrency(order.order_amount) : null}
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div className="flex justify-center">
					<Link
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
						href="/menu"
					>
						Continue Shopping
					</Link>
				</div>
			</div>
		</div>
	);
}
