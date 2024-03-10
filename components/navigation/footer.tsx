/**
 * v0 by Vercel.
 * @see https://v0.dev/t/USXvmKMRGXP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, MailIcon, MenuIcon, PhoneIcon } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full py-6 bg-zinc-950 dark text-gray-50">
			<div className="container grid grid-cols-1 gap-4 px-4 mx-auto md:px-6 lg:px-0 md:grid-cols-2 lg:grid-cols-4">
				<div className="flex items-center justify-center md:justify-start">
					<Link href="/">
						<MenuIcon className="w-6 h-6" />
						<span className="sr-only">Black Impala</span>
					</Link>
				</div>
				<div className="flex flex-col items-center space-y-2 md:items-start">
					<p className="font-semibold">Contact Us</p>
					<p>
						<PhoneIcon className="inline-block w-4 h-4 mr-1" /> (123) 456-7890
					</p>
					<p>
						<MailIcon className="inline-block w-4 h-4 mr-1" />{" "}
						info@blackimpala.co.za
					</p>
				</div>
				<div className="flex items-center justify-center space-x-4">
					<Link
						className="text-gray-50 hover:text-blue-500"
						href="https://www.facebook.com/blackimpalaPE"
					>
						<FacebookIcon className="w-6 h-6" />
						<span className="sr-only">Facebook</span>
					</Link>
					<Link
						className="text-gray-50 hover:text-pink-500"
						href="https://www.facebook.com/blackimpalaPE"
					>
						<InstagramIcon className="w-6 h-6" />
						<span className="sr-only">Instagram</span>
					</Link>
				</div>
				<div className="flex flex-col items-center space-y-2 md:items-start">
					<p className="font-semibold">Newsletter</p>
					<form className="flex space-x-2">
						<Input
							className="flex-1 max-w-lg bg-zinc-950"
							placeholder="Enter your email"
							type="email"
						/>
						<Button type="submit">Sign Up</Button>
					</form>
				</div>
			</div>
		</footer>
	);
}



