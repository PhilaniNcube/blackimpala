
import { createClient } from "@/utils/supabase/service";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: Response) {
	const supabase = createClient();

	const formData = await req.formData();

	const values = Object.fromEntries(formData.entries());

	console.log(JSON.stringify(values, null, 2));

	const id = values.item_name as string;
	const status = values.payment_status as string;
	const pf_payment_id = values.pf_payment_id as string;

	if (status !== "COMPLETE") {
		return NextResponse.json({ data: values });
	}

	if (status === "COMPLETE") {
		const { data: order, error } = await supabase
			.from("orders")
			.update({
				order_status: "completed",
			})
			.eq("id", id)
			.select("*")
			.single();

		console.log({ order, error });

		if (error) {
			return NextResponse.json({ data: error });
		}

		await resend.batch.send([
			{
				from: "Black Impala <noreply@blackimpala.co.za>",
				to: [
					"database@blackimpala.co.za",
					// "ncbphi001@gmail.com",
					// "countersales@blackimpala.co.za",
					order.email ? order.email : "database@blackimpala.co.za",
				],
				subject: "Order Confirmation",
				text: `Thank you for your order. Your order has been received and is being processed. Your order number is ${order.id}.`,
				html: `<div style="max-width: 500px; margin: auto;">
                    <h1 style="font-size: 22px; font-weight: bold;">Order Confirmation</h1>
                    <p>Thank you for your order. Your order has been received and is being processed. Your order number is ${order.id}.</p>
                    <a href="${process.env.NEXT_PUBLIC_SITE_URL}/order/${order.id}">View your order</a>
                 </div>`,
			},
			{
				from: "Black Impala <database@blackimpala.co.za>",
				to: [
					"database@blackimpala.co.za",
					// "countersales@blackimpala.co.za",
					// order.shipping_address.email,
					"ncbphi001@gmail.com",
				],
				subject: "New Order Received",
				text: `You have just received a new order. Order number is ${order.id}.`,
				html: `<div style="max-width: 500px; margin: auto;">
                    <h1 style="font-size: 22px; font-weight: bold;">New Order</h1>
                    <p>You have received a new order. The order number is ${order.id}.</p>
                    <h2>Total: R${order.order_amount}.</h2>
                    <a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/order">View orders</a>
                    <div>
                      <h3>Customer Details</h3>
                      <p>${order.phone_number}</p>
                      <p>${order.email}</p>

                    </div>
                 </div>`,
			},
		]);

		return NextResponse.json({ data: order });
	}

	return NextResponse.json({ data: formData });
}
