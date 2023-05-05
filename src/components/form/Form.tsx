import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import PersonalDetailsSection from "./personal/PersonalDetailsSection";
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";

import { CV } from "../../interfaces/cv_interface";

interface FormProps {
	cv: CV;
}

const Form = ({ cv }: FormProps) => {
	const { personalDetails, education, experience }: CV = cv;
	return (
		<Box component="div" padding={2}>
			<Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
				<PersonalDetailsSection personalDetails={personalDetails} />
				<EducationSection education={education} />
				<ExperienceSection experience={experience} />
			</Stack>
		</Box>
	);
};

export default Form;
