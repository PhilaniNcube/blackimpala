"use client"

import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUp } from "@/action/auth";

export default function SignUpForm() {
	return (
		<form action={signUp}>
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>
						Enter your information below to login to your account.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="first-name">First Name</Label>
							<Input id="first-name" placeholder="John" required type="text" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="last-name">Last Name</Label>
							<Input id="last-name" placeholder="Doe" required type="text" />
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							placeholder="m@example.com"
							required
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" required type="password" />
					</div>
				</CardContent>
				<CardFooter>
					<Button className="w-full" type="submit">
						Login
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}

