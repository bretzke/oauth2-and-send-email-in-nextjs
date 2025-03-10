import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
	title: "OAuth2 and send e-mail in Next.js",
	description: "Sample application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-dvh flex flex-col">
				{children}
				<footer className="flex justify-center underline">
					<Link href="https://www.bretzke.dev/" target="_blank">
						Willian Bretzke © 2025
					</Link>
				</footer>
			</body>
		</html>
	);
}
