import { FormEvent } from "react";
import { Experience } from "../../../interfaces/cv_interface";
import SectionWrapper from "../SectionWrapper";
import ExperienceItem from "./ExperienceItem";
import Button from "@mui/material/Button";

interface ExperienceProps {
	experience: Experience[];
	handleInputChange: (
		e: FormEvent<HTMLDivElement>,
		section: "personalDetails" | "education" | "experience"
	) => void;
	handleAddItem: (section: "education" | "experience") => void;
	handleRemoveItem: (index: number, section: "education" | "experience") => void;
}

const ExperienceSection = ({
	experience,
	handleInputChange,
	handleAddItem,
	handleRemoveItem,
}: ExperienceProps) => {
	return (
		<SectionWrapper title="Experience">
			{experience.map((item, index) => (
				<ExperienceItem
					index={index}
					experienceItem={item}
					key={item.id}
					handleInputChange={handleInputChange}
					handleRemoveItem={handleRemoveItem}
				/>
			))}
			<Button variant="contained" color="success">
				ADD
			</Button>
		</SectionWrapper>
	);
};

export default ExperienceSection;
