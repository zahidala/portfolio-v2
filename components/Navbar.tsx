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

	const menuItems = ["About", "Experience", "Projects", "Contact", "Resume"];

	return (
		<NextUINavbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
				<NavbarBrand>
					<p className="font-light text-xl text-inherit sm:text-2xl">Zahid Allaulddin</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex gap-4 lg:gap-8" justify="end">
				<NavbarItem isActive={activeSection === "About"}>
					<Link className="text-lg" color={activeSection === "About" ? "primary" : "foreground"} href="#">
						About
					</Link>
				</NavbarItem>

				<NavbarItem isActive={activeSection === "Experience"}>
					<Link className="text-lg" color={activeSection === "Experience" ? "primary" : "foreground"} href="#">
						Experience
					</Link>
				</NavbarItem>

				<NavbarItem isActive={activeSection === "Projects"}>
					<Link className="text-lg" color={activeSection === "Projects" ? "primary" : "foreground"} href="#">
						Projects
					</Link>
				</NavbarItem>

				<NavbarItem>
					<Link className="text-lg" color={activeSection === "Contact" ? "primary" : "foreground"} href="#">
						Contact
					</Link>
				</NavbarItem>

				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
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
						<Link className="w-full" color={activeSection === item ? "primary" : "foreground"} href="#">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
};
