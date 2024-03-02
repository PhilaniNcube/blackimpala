import { getCategories } from "@/lib/fetchers/categories";
import Link from "next/link";
import NavMenu from "./nav-menu";

const DesktopNavigation = async () => {

  const {error, categories} = await getCategories()

  return (
			<header className="items-center hidden w-full h-16 text-white bg-black md:flex">
				<nav className="container flex items-center justify-between mx-auto">
					<Link href="/" className="text-2xl font-medium">
						Black Impala
					</Link>
					<div>
						<NavMenu />
					</div>
				</nav>
			</header>
		);
};
export default DesktopNavigation;
