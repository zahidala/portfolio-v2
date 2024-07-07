"use client";

import { About, Experience, Navbar } from "@/components";

export default function Home() {
	return (
		<>
			<Navbar />

			<div className="p-10 md:p-20 flex flex-col gap-10 md:gap-40">
				<About />
				<Experience />
			</div>
		</>
	);
}
