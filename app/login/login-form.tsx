"use client";

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
import { login } from "@/action/auth";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form action={login} className="flex items-center justify-center h-screen">
	<Card>
		<CardHeader>
			<CardTitle>Login</CardTitle>
			<CardDescription>
				Enter your email below to login to your account.
			</CardDescription>
		</CardHeader>
		<CardContent className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					placeholder="m@example.com"
					required
					type="email"
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Password</Label>
				<Input id="password" name="password" required type="password" />
			</div>
		</CardContent>
		<CardFooter className="flex flex-col space-y-3 justify-start items-start">
			<SubmitButton
				className="w-full h-10 text-white rounded bg-zinc-900"
				pendingText="Loging In.."
			>
				Login
			</SubmitButton>
      <p className="text-sm">
        Don't have an account?{" "}
      <Link href="/sign-up" className="text-blue-600 underline">Sign Up</Link>
      </p>
		</CardFooter>
	</Card>
</form>
  )
}


export default LoginForm;
