export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col grow items-center justify-center gap-4 p-4">
			{children}
		</main>
	);
}
