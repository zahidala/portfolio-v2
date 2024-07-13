import { Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react";

interface ProjectCardProps {
	heading: string;
	description: string;
	imgSrc: string;
	chips: Array<{ title: string; icon?: React.ReactNode }>;
}

export const ProjectCard = (props: ProjectCardProps) => {
	const { heading, description, imgSrc, chips } = props;

	return (
		<Card className="flex-1 p-3 space-y-5" radius="lg" isHoverable isPressable>
			<CardHeader>
				<p className="font-bold text-xl">{heading}</p>
			</CardHeader>

			<CardBody className="space-y-10">
				<Image alt="Card background" className="object-cover min-h-[250px] rounded-xl shadow-xl" src={imgSrc} />

				<p className="text-md">{description}</p>
			</CardBody>

			<CardFooter className="flex gap-2 flex-wrap">
				{chips.map((chip, index) => (
					<Chip key={index} className="space-x-1 px-2" color="default" size="sm" startContent={chip.icon}>
						<span className="font-semibold">{chip.title}</span>
					</Chip>
				))}
			</CardFooter>
		</Card>
	);
};
7;
