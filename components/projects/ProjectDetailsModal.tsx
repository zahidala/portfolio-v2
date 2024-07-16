import {
	Button,
	ButtonGroup,
	Chip,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import { ProjectCardProps } from "./ProjectCard";
import Link from "next/link";
import React from "react";

interface ProjectDetailsModalProps extends ProjectCardProps {
	isOpen: boolean;
	onOpenChange: () => void;
}

export const ProjectDetailsModal = (props: ProjectDetailsModalProps) => {
	const { isOpen, onOpenChange, chips, description, heading, imgSrc, githubLink, demoLink } = props;

	return (
		<>
			<Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>{heading}</ModalHeader>

							<ModalBody className="py-3 space-y-5">
								<Image alt={heading} className="rounded-xl min-h-[200px] shadow-xl" src={imgSrc} />

								<span>{description}</span>

								<div className="flex flex-wrap gap-2">
									{chips.map((chip, index) => (
										<Chip key={index} className="space-x-1 px-2" color="default" size="sm" startContent={chip.icon}>
											<span className="font-semibold">{chip.title}</span>
										</Chip>
									))}
								</div>
							</ModalBody>

							<ModalFooter>
								{!demoLink && (
									<Button color="danger" variant="light" onClick={onClose}>
										Close
									</Button>
								)}

								<ButtonGroup>
									<Button
										as={Link}
										color="primary"
										href={githubLink}
										startContent={<i className="fa-brands fa-github"></i>}
										target="_blank"
										onClick={onClose}
									>
										GitHub
									</Button>
									{demoLink && (
										<Button as={Link} color="danger" href={demoLink} target="_blank" onClick={onClose}>
											Demo
										</Button>
									)}
								</ButtonGroup>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
