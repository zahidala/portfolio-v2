import "../app/globals.css";
import { Button, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const About = () => {
	const [isLoading, setLoading] = useState(true);

	const { theme } = useTheme();

	const handleLoad = () => setLoading(false);

	const [currentText, setCurrentText] = useState("");
	const [textIndex, setTextIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [charIndex, setCharIndex] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(50);

	const texts = ["Hi, my name is Zahid!", "I'm a Full Stack Developer!"];

	useEffect(() => {
		const handleType = () => {
			const currentTextToShow = texts[textIndex];
			let updatedText = "";

			if (!isDeleting) {
				updatedText = currentTextToShow.slice(0, charIndex + 1);
				setCharIndex(charIndex + 1);
				setTypingSpeed(85);
			} else {
				updatedText = currentTextToShow.slice(0, charIndex - 1);
				setCharIndex(charIndex - 1);
				setTypingSpeed(50);
			}

			setCurrentText(updatedText);

			if (!isDeleting && updatedText === currentTextToShow) {
				setTimeout(() => setIsDeleting(true), 1000);
			} else if (isDeleting && updatedText === "") {
				setIsDeleting(false);
				setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
				setCharIndex(0);
			}
		};

		const timer = setTimeout(handleType, typingSpeed);

		return () => clearTimeout(timer);
	}, [charIndex, isDeleting, textIndex, typingSpeed, texts]);

	return (
		<div className="flex flex-col lg:flex-row gap-8">
			<div className="flex flex-col gap-10 flex-1">
				<h1 className="text-2xl lg:text-3xl font-extralight">
					{currentText}
					<span className="blinking-cursor" />
				</h1>

				<p className="text-md md:text-md lg:text-lg font-extralight">
					I'm a passionate Full Stack Developer with a strong understanding of diverse technologies. I thrive on
					tackling new and complex challenges, diligently solving problems with a relentless drive for learning. With an
					unwavering love for technology, I am dedicated to staying ahead of the curve and continuously expanding my
					skills.
				</p>

				<div className="flex items-center flex-1 gap-4">
					<Button as={Link} href="https://www.linkedin.com/in/zahidallaulddin/" target="_blank" isIconOnly>
						<i className="fa-brands fa-linkedin fa-xl"></i>
					</Button>

					<Button as={Link} href="https://www.github.com/zahidala" target="_blank" isIconOnly>
						<i className="fa-brands fa-github fa-xl"></i>
					</Button>

					<Button as={Link} href="mailto:zahidallaulddin@gmail.com" target="_blank" isIconOnly>
						<i className="fa-solid fa-envelope fa-xl"></i>
					</Button>

					{/* Divider */}

					<div
						style={{
							backgroundColor: theme === "dark" ? "#333" : "#ccc",
							height: "40px",
							marginInline: "10px",
							width: "2px",
						}}
					/>

					<Button color="primary" size="lg" variant="solid">
						Resume
					</Button>
				</div>
			</div>

			<Image
				alt="IMG-2102"
				isLoading={isLoading}
				src="https://i.ibb.co/B2pjd5K/IMG-2102.jpg"
				width={400}
				onLoad={handleLoad}
			/>
		</div>
	);
};
