import { FormEvent } from "react";
import { Education } from "../../../interfaces/cv_interface";

import SectionWrapper from "../SectionWrapper";
import EducationItem from "./EducationItem";
import Button from "@mui/material/Button";

interface EducationProps {
	education: Education[];
	handleInputChange: (
		e: FormEvent<HTMLDivElement>,
		section: "personalDetails" | "education" | "experience"
	) => void;
	handleAddItem: (section: "education" | "experience") => void;
	handleRemoveItem: (index: number, section: "education" | "experience") => void;
}

const EducationSection = ({
	education,
	handleInputChange,
	handleAddItem,
	handleRemoveItem,
}: EducationProps) => {
	return (
		<SectionWrapper title="Education">
			{education.map((item, index) => (
				<EducationItem
					index={index}
					educationItem={item}
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

export default EducationSection;
