import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { GeneralAssemblySVG } from "./projects/GeneralAssemblySVG";
import { ProjectCard } from "./projects/ProjectCard";
import { SiBootstrap, SiDjango, SiExpress, SiMongodb, SiPython, SiReact } from "react-icons/si";
import { Tab, Tabs } from "@nextui-org/tabs";

export const Projects = () => {
	return (
		<div className="flex flex-col gap-20">
			<h1 className="text-2xl lg:text-4xl font-extralight text-center">Projects</h1>

			<div>
				<Tabs
					classNames={{
						tab: "h-12 max-w-fit",
					}}
					variant="underlined"
				>
					<Tab
						title={
							<div className="flex justify-between gap-2">
								<GeneralAssemblySVG className="w-5 h-5" />
								<span>General Assembly</span>
							</div>
						}
					>
						<div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row p-5 gap-6">
							<ProjectCard
								chips={[
									{ icon: <i className="fa-brands fa-html5"></i>, title: "HTML" },
									{ icon: <i className="fa-brands fa-css3-alt"></i>, title: "CSS" },
									{ icon: <i className="fa-brands fa-js"></i>, title: "JavaScript" },
								]}
								demoLink="https://zahidala.github.io/snowman/"
								description="A variation of Hangman game where you need to guess either correct letters or the whole word to prevent the snowman from appearing."
								githubLink="https://github.com/zahidala/snowman"
								heading="Snowman"
								imgSrc="https://i.ibb.co/ZxNk0fd/Snowman.png"
							/>

							<ProjectCard
								chips={[
									{ icon: <SiMongodb size={15} />, title: "MongoDB" },
									{ icon: <SiExpress size={15} />, title: "Express" },
									{ icon: <SiBootstrap size={15} />, title: "Bootstrap" },
									{ icon: <FaNodeJs size={15} />, title: "Node.js" },
								]}
								description="An application utilizing full CRUD operations to store and display a database of comics where a user can add, edit and remove their own comics. Users are also able to view comics added by others."
								githubLink="https://github.com/zahidala/comics-website"
								heading="Comics Website"
								imgSrc="https://i.ibb.co/mBhBMQY/Comics-Website-1.png"
							/>

							<ProjectCard
								chips={[
									{ icon: <SiDjango size={15} />, title: "Django" },
									{ icon: <SiPython size={15} />, title: "Python" },
									{ icon: <BiLogoPostgresql size={15} />, title: "PostgreSQL" },
									{ icon: <SiBootstrap size={15} />, title: "Bootstrap" },
								]}
								description="A website for a vet clinic named House Of Paws where users can book an appointment for available services on the website for their pets."
								githubLink="https://github.com/zahidala/project3-pets"
								heading="House Of Paws"
								imgSrc="https://i.imgur.com/g6K7bBB.png"
							/>

							<ProjectCard
								chips={[
									{ icon: <SiReact size={15} />, title: "React" },
									{ icon: <FaNodeJs size={15} />, title: "Node.js" },
									{ icon: <SiExpress size={15} />, title: "Express" },
									{ icon: <SiMongodb size={15} />, title: "MongoDB" },
								]}
								description="A full-stack MERN application using third party APIs such as Google Maps to get users recommendations on places to visit based on their current location or location that is searched."
								githubLink="https://github.com/zahidala/project4-fe"
								heading="Travel Buddy"
								imgSrc="https://i.ibb.co/cwK23C7/React-App.png"
							/>
						</div>
					</Tab>

					<Tab
						title={
							<div className="flex justify-between gap-2">
								<img alt="Reboot01 Logo" className="w-5 h-5" src="/reboot01.png" />
								<span>Reboot01</span>
							</div>
						}
					>
						<p>Work Projects</p>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};
