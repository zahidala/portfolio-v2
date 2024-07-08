"use client";

import { About, Experience, Navbar, Projects } from "@/components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
	const [activeSection, setActiveSection] = useState("About");

	const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
	const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.5 });
	const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (aboutInView) {
			setActiveSection("About");
		} else if (experienceInView) {
			setActiveSection("Experience");
		} else if (projectsInView) {
			setActiveSection("Projects");
		}
	}, [aboutInView, experienceInView]);

	return (
		<>
			<Navbar activeSection={activeSection} />

			<div className="p-10 md:p-20 flex flex-col gap-10 md:gap-40">
				<div ref={aboutRef} id="about">
					<About />
				</div>

				<div ref={experienceRef} id="experience">
					<Experience />
				</div>

				<div ref={projectsRef} id="projects">
					<Projects />
				</div>
			</div>
		</>
	);
}
