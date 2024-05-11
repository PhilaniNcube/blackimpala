/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JcRtlAOOda2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CancelledOrder({
	params: { id },
}: { params: { id: string } }) {
	return (
		<div className="flex flex-col items-center justify-center py-12 h-screen">
			<h1 className="text-4xl font-bold tracking-tight">Order Cancelled</h1>
			<p className="mt-4 max-w-lg text-center text-gray-500 dark:text-gray-400">
				You cancelled the order before it could be fulfilled.
			</p>
			<div className="mt-8 flex gap-4">
				<Link href={`/order/${id}`}>
					<Button>Try Again</Button>
				</Link>
				<Link href="/">
					<Button variant="outline">Go Home</Button>
				</Link>
			</div>
		</div>
	);
}
