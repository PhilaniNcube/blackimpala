import { getCategories } from "@/lib/fetchers/categories";
import Link from "next/link";
import NavMenu from "./nav-menu";
import AuthNavigation from "./auth-navigation";
import { is_admin } from "@/lib/fetchers/auth";
import { Separator } from "../ui/separator";
import CartNav from "./cart-nav";


const DesktopNavigation = async () => {

 const admin = await is_admin();



  return (
			<header className="items-center hidden w-full h-16 text-white bg-black md:flex">
				<nav className="container flex items-center justify-between mx-auto">
					<Link href="/" className="text-2xl font-medium">
						Black Impala
					</Link>
					<div className="flex items-center space-x-3">
						<NavMenu />
            <CartNav />
						{admin ? (
							<>
                <Separator orientation="vertical" className="mx-3 text-white" />
								<AuthNavigation />
							</>
						) : null}
					</div>
				</nav>
			</header>
		);
};
export default DesktopNavigation;
