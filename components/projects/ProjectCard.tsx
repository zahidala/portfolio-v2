import { Card, CardHeader, Image, useDisclosure } from "@nextui-org/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

export interface ProjectCardProps {
	heading: string;
	description: string;
	imgSrc: string;
	chips: Array<{ title: string; icon?: React.ReactNode }>;
	demoLink?: string;
	githubLink: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
	const { heading, description, imgSrc, chips, githubLink, demoLink } = props;

	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Card
				className="flex-1 p-5 space-y-5 hover:text-foreground-600"
				radius="lg"
				isHoverable
				isPressable
				onClick={onOpen}
			>
				<CardHeader className="flex p-0 justify-between">
					<span className="font-bold text-md">{heading}</span>
					<FaExternalLinkAlt />
				</CardHeader>

				<Image alt={heading} className="object-cover aspect-square min-h-[200px] rounded-xl shadow-xl" src={imgSrc} />
			</Card>

			<ProjectDetailsModal
				chips={chips}
				demoLink={demoLink}
				description={description}
				githubLink={githubLink}
				heading={heading}
				imgSrc={imgSrc}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
		</>
	);
};
7;
