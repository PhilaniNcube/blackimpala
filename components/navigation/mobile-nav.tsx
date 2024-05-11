import Link from "next/link";
import { Button } from "../ui/button";
import MobileSlide from "./mobile-slide";
import { createClient } from "@/utils/supabase/server";

const MobileNav = async () => {

const supabase = createClient()

const {data:{user}} = await supabase.auth.getUser()


  return (
			<header className="flex flex-row items-center md:hidden bg-black text-white py-3">
				<div className="container flex flex-row items-center justify-between">
					<Link href="/" className="text-2xl font-medium">
						Black Impala
					</Link>
					<div className="flex flex-row space-x-4">

						<MobileSlide user={user} />
					</div>
				</div>
			</header>
		);
};
export default MobileNav;
