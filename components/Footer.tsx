import { useTheme } from "next-themes";
import Link from "next/link";

export const Footer = () => {
	const { theme } = useTheme();
	return (
		<footer className="flex flex-col w-full items-center gap-3 p-5">
			<div className="flex justify-center items-center gap-4">
				<span className="text-small">Zahid Allaulddin</span>

				<div
					style={{
						backgroundColor: theme === "dark" ? "#333" : "#ccc",
						height: "15px",
						marginInline: "10px",
						width: "1px",
					}}
				/>

				<Link href="https://www.linkedin.com/in/zahidallaulddin/" target="_blank">
					<i className="fab fa-linkedin text-default-400 cursor-pointer hover:opacity-80"></i>
				</Link>

				<Link href="https://www.github.com/zahidala" target="_blank">
					<i className="fab fa-github text-default-400 cursor-pointer hover:opacity-80"></i>
				</Link>

				<Link href="mailto:zahidallaulddin@gmail.com" target="_blank">
					<i className="fa-solid fa-envelope text-default-400 cursor-pointer hover:opacity-80"></i>
				</Link>
			</div>

			<p className="text-center text-small text-default-400">
				&copy; {new Date().getFullYear()} Zahid Allaulddin. All rights reserved.
			</p>
		</footer>
	);
};
