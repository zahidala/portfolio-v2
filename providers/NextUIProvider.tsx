import { NextUIProvider as NUIProvider } from "@nextui-org/react";

export const NextUIProvider = ({ children }: { children: React.ReactNode }) => {
	return <NUIProvider>{children}</NUIProvider>;
};
