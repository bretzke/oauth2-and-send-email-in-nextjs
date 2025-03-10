import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col grow items-center justify-center gap-4 p-4">
			<h1 className="text-xl font-bold">OAuth2 and send e-mail in Next.js</h1>
			<p className="italic">
				This example project demonstrates the implementation of OAuth2 for
				secure authentication, in addition to the traditional login method with
				e-mail and password, including account verification by e-mail.
			</p>
			<div className="flex gap-8">
				<Link href="/login">
					<Button>Login</Button>
				</Link>
				<Link href="/register">
					<Button>Register</Button>
				</Link>
			</div>
		</main>
	);
}
