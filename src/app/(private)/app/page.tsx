"use client";
import { useSession } from "next-auth/react";

export default function AppHome() {
	const userSession = useSession();
	return (
		<main className="p-5">
			<h1 className="font-bold text-2xl">App Home</h1>
			<h5 className="font-semibold text-xl">/app</h5>
			<p>
				This route will be protected by middleware that will check if the user
				is authenticated.
			</p>

			<pre className="whitespace-pre-wrap break-words mt-8">
				{JSON.stringify(userSession, null, 4)}
			</pre>
		</main>
	);
}
