import { FC } from "react";
import Section from "./Section";

const Main: FC = () => {
	return (
		<main className="grid max-h-[90%] grid-cols-2">
			<Section>form</Section>
			<Section>cv</Section>
		</main>
	);
};

export default Main;
