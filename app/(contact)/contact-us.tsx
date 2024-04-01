/**
 * v0 by Vercel.
 * @see https://v0.dev/t/emYYrwFhsXz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900">
			<div className="w-full max-w-2xl p-4 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
						Contact Us
					</h2>
					<p className="text-gray-600 dark:text-gray-400">
						Have any questions or concerns? We'd love to hear from you.
					</p>
				</div>
				<form className="grid grid-cols-1 gap-6">
					<div>
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="John Doe" required type="text" />
					</div>
					<div>
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							placeholder="john@example.com"
							required
							type="email"
						/>
					</div>
					<div>
						<Label htmlFor="subject">Subject</Label>
						<Input id="subject" placeholder="Subject" required type="text" />
					</div>
					<div>
						<Label htmlFor="message">Message</Label>
						<Textarea
							className="min-h-[100px]"
							id="message"
							placeholder="Enter your message"
							required
						/>
					</div>
					<div>
						<Button type="submit">Submit</Button>
					</div>
				</form>
				<div className="space-y-2">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
						Contact Information
					</h3>

					<p className="text-gray-600 dark:text-gray-400">
						Email: info@blackimpala.co.za
					</p>
					<p className="flex space-x-2 text-gray-600 dark:text-gray-400">
						<span>Address:</span> Dom Pedro Jetty, Port Elizabeth Harbour,{" "}
						<br />
						6001, Humewood, <br />Gqeberha, 6000
					</p>
				</div>
			</div>
		</main>
	);
}

