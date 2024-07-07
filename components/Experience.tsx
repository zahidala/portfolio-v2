import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image } from "@nextui-org/react";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPrisma } from "react-icons/si";
import { useState } from "react";

export const Experience = () => {
	const [isLoading, setLoading] = useState(true);

	return (
		<div className="flex flex-col gap-20 items-center">
			<h1 className="text-2xl lg:text-4xl font-extralight text-center">Experience</h1>

			<Card>
				<CardHeader className="flex justify-between">
					<div className="flex gap-4 items-center">
						<Image
							alt="mre-logo"
							height={60}
							isLoading={isLoading}
							radius="sm"
							src="https://i.ibb.co/1mhSWJK/mre-blue.png"
							width={60}
							onLoad={() => setLoading(false)}
						/>
						<div className="flex flex-col gap-1">
							<p className="text-md md:text-lg">MRE W.L.L</p>
							<p className="text-sm text-default-500 md:text-md">Junior Full Stack Developer</p>
						</div>
					</div>

					<p className="text-sm text-default-500 md:text-md">2023 - Present</p>
				</CardHeader>

				<Divider />

				<CardBody className="p-10">
					<ul className="list-none list-inside gap-3 flex flex-col">
						<li className="before:content-['-'] before:mr-2">
							Developed and maintained the company's internal website.
						</li>
						<li className="before:content-['-'] before:mr-2">
							Developed and maintained parts of the company's internal API.
						</li>
						<li className="before:content-['-'] before:mr-2">
							Ensure the best possible performance, quality, and responsiveness of the applications.
						</li>
					</ul>
				</CardBody>

				<Divider />

				<CardFooter className="flex gap-2 flex-wrap p-5 justify-center md:items-center">
					<Chip color="default" startContent={<RiNextjsFill size={20} />}>
						NextJS
					</Chip>
					<Chip color="default" startContent={<FaNodeJs size={20} />}>
						NodeJS
					</Chip>
					<Chip color="default" startContent={<SiExpress size={20} />}>
						ExpressJS
					</Chip>
					<Chip color="default" startContent={<IoLogoJavascript size={20} />}>
						JavaScript
					</Chip>
					<Chip color="default" startContent={<BiLogoTypescript size={20} />}>
						TypeScript
					</Chip>
					<Chip color="default" startContent={<BiLogoPostgresql size={20} />}>
						PostgreSQL
					</Chip>
					<Chip color="default" startContent={<SiPrisma size={20} />}>
						Prisma
					</Chip>
				</CardFooter>
			</Card>
		</div>
	);
};
