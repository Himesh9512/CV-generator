import PersonalDetailsSection from "./personal/PersonalDetailsSection";
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { CV } from "../../interfaces/cv_interface";
import { FormEvent } from "react";

interface FormProps {
	cv: CV;
	handleInputChange: (
		e: FormEvent<HTMLDivElement>,
		section: "personalDetails" | "education" | "experience"
	) => void;
	handleAddItem: (section: "education" | "experience") => void;
	handleRemoveItem: (index: number, section: "education" | "experience") => void;
}

const Form = ({ cv, handleInputChange, handleAddItem, handleRemoveItem }: FormProps) => {
	const { personalDetails, education, experience }: CV = cv;
	return (
		<Box component="div" padding={2}>
			<Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
				<PersonalDetailsSection
					personalDetails={personalDetails}
					handleInputChange={handleInputChange}
				/>
				<EducationSection
					education={education}
					handleInputChange={handleInputChange}
					handleAddItem={handleAddItem}
					handleRemoveItem={handleRemoveItem}
				/>
				<ExperienceSection
					experience={experience}
					handleInputChange={handleInputChange}
					handleAddItem={handleAddItem}
					handleRemoveItem={handleRemoveItem}
				/>
			</Stack>
		</Box>
	);
};

export default Form;
