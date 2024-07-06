"use client";

import { About } from "@/components/About";
import { Navbar } from "@/components";

export default function Home() {
	return (
		<>
			<Navbar />

			<div className="p-10 lg:p-20">
				<About />
			</div>
		</>
	);
}
