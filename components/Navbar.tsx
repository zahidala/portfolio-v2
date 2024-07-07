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

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["About", "Skills", "Projects", "Contact", "Resume"];

	return (
		<NextUINavbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
				<NavbarBrand>
					<p className="font-light text-xl text-inherit sm:text-2xl">Zahid Allaulddin</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex gap-4 lg:gap-8" justify="end">
				<NavbarItem>
					<Link className="text-lg" color="foreground" href="#">
						About
					</Link>
				</NavbarItem>

				<NavbarItem>
					<Link className="text-lg" color="foreground" href="#">
						Experience
					</Link>
				</NavbarItem>

				<NavbarItem>
					<Link className="text-lg" color="foreground" href="#">
						Projects
					</Link>
				</NavbarItem>

				<NavbarItem>
					<Link className="text-lg" color="foreground" href="#">
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
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className="w-full" href="#" size="lg">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
};
