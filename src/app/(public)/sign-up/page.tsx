"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { registerNewUser } from "@/app/actions/register-new-user";

export default function SignUp() {
	const formSchema = z.object({
		name: z.string().min(1, "Full name is required"),
		email: z
			.string()
			.email("Enter a valid email")
			.min(1, "Email is a required field"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters long")
			.min(1, "Password is a required field"),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	async function handleSignIn() {}

	async function handleSubmitForm(formValues: z.infer<typeof formSchema>) {
		await registerNewUser(formValues);

		// handle the response to the server action
	}

	return (
		<section className="flex flex-col gap-4 w-[304px] border rounded-sm p-4">
			<h1 className="text-2xl font-bold">Sign Up</h1>
			<hr />
			<div>
				<Button onClick={handleSignIn}>Google</Button>
			</div>
			<hr />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmitForm)}
					className="flex flex-col gap-4"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter your full name" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>E-mail</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter your email" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Senha</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="enter your password"
										type="password"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" disabled={false}>
						Sign Up
					</Button>
				</form>
			</Form>
			<hr />
			<Link href="/">
				<Button variant="outline" className="w-full">
					Back
				</Button>
			</Link>
		</section>
	);
}
