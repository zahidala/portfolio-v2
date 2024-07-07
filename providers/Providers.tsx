import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "./NextUIProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class">{children}</NextThemesProvider>
		</NextUIProvider>
	);
};
