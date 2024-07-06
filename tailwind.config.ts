import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
// const {nextui} = require("@nextui-org/react");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	plugins: [nextui()],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
};
export default config;
