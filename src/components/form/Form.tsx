import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import PersonalDetailsSection from "./sections/PersonalDetailsSection";

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
			</Stack>
		</Box>
	);
};

export default Form;
