import {
	Button,
	Link,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from "@nextui-org/react";
import { ThemeSwitcher } from ".";
import { useState } from "react";

interface NavbarProps {
	activeSection: string;
}

export const Navbar = (props: NavbarProps) => {
	const { activeSection } = props;

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["About", "Experience", "Projects", "Resume"];

	return (
		<NextUINavbar isMenuOpen={isMenuOpen} maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
				<NavbarBrand>
					<p className="font-light text-xl text-inherit sm:text-2xl">Zahid Allaulddin</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex gap-4 lg:gap-8" justify="end">
				{menuItems
					.filter(item => item !== "Resume")
					.map((item, index) => (
						<NavbarItem
							key={`${item}-${index}`}
							isActive={activeSection === item}
							onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
						>
							<Link
								className="text-lg"
								color={activeSection === item ? "primary" : "foreground"}
								href={`#${item.toLowerCase()}`}
							>
								{item}
							</Link>
						</NavbarItem>
					))}

				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="https://zahids-portfolio.s3.amazonaws.com/ZahidAllaulddinCV.pdf"
						target="_blank"
						variant="flat"
					>
						Resume
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarItem>
				<ThemeSwitcher />
			</NavbarItem>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`} isActive={activeSection === item}>
						<Link
							className="w-full"
							color={activeSection === item ? "primary" : "foreground"}
							href={
								item !== "Resume"
									? `#${item.toLowerCase()}`
									: "https://zahids-portfolio.s3.amazonaws.com/ZahidAllaulddinCV.pdf"
							}
							target={item === "Resume" ? "_blank" : undefined}
							onClick={() => setIsMenuOpen(false)}
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
};
