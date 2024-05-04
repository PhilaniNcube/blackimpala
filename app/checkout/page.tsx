import { createClient } from "@/utils/supabase/server";
import Checkout from "./_components/checkout-page";

const page = async () => {
	const supabase = createClient();

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();



	return (
		<div>
			{error || user === null ? (
				<div className="container">
					<h1 className="text-4xl font-semibold text-center">Checkout</h1>
					<p className="text-center">Please login to continue</p>
				</div>
			) : (
				<Checkout />
			)}
		</div>
	);
};
export default page;
