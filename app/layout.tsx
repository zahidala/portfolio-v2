import "./globals.css";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
	description: "Zahid Allaulddin's Portfolio",
	title: "Zahid Allaulddin",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					crossOrigin="anonymous"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
					integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
					referrerPolicy="no-referrer"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
