import { Tab, Tabs } from "@nextui-org/tabs";

export const Projects = () => {
	return (
		<div className="flex flex-col gap-20">
			<h1 className="text-2xl lg:text-4xl font-extralight text-center">Projects</h1>

			<Tabs variant="underlined">
				<Tab title="General Assembly">
					<p>Personal Projects</p>
				</Tab>

				<Tab title="Reboot01">
					<p>Work Projects</p>
				</Tab>
			</Tabs>
		</div>
	);
};
