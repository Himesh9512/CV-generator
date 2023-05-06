import TopSection from "./TopSection";
import PersonalDetailsSection from "./personal/PersonalDetailsSection";
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { CV } from "../../types/cv_interface";
import { AddItem, InputChange, RemoveItem } from "../../types/functions_type";

interface FormProps {
	cv: CV;
	handleInputChange: InputChange;
	handleAddItem: AddItem;
	handleRemoveItem: RemoveItem;
	handleResetCv: () => void;
	handleLoadExample: () => void;
	handlePrint: () => void;
}

const Form = ({
	cv,
	handleInputChange,
	handleAddItem,
	handleRemoveItem,
	handleResetCv,
	handleLoadExample,
	handlePrint,
}: FormProps) => {
	const { personalDetails, education, experience }: CV = cv;
	return (
		<Box component="div" padding={2} maxWidth={700}>
			<Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
				<TopSection
					handleResetCv={handleResetCv}
					handleLoadExample={handleLoadExample}
					handlePrint={handlePrint}
				/>
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
