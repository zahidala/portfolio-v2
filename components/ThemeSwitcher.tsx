import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	const handleSetTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div>
			<Button className="rounded-full" onClick={handleSetTheme}>
				<i className={`fa-regular ${theme === "light" ? "fa-moon" : "fa-sun"} fa-xl`}></i>
			</Button>
		</div>
	);
}
