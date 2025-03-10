import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
	return (
		<main className="flex h-dvh flex-col items-center justify-center gap-4">
			<h1>Login</h1>

			<Link href="/">
				<Button>Back</Button>
			</Link>
		</main>
	);
}
