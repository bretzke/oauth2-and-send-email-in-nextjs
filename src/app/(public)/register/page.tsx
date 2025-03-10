import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Register() {
	return (
		<main className="flex h-dvh flex-col items-center justify-center gap-4">
			<h1>Register</h1>

			<Link href="/">
				<Button>Back</Button>
			</Link>
		</main>
	);
}
