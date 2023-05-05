import { Education } from "../../../interfaces/cv_interface";

import SectionWrapper from "../SectionWrapper";
import EducationItem from "./EducationItem";
import Button from "@mui/material/Button";

interface EducationProps {
	education: Education[];
}

const EducationSection = ({ education }: EducationProps) => {
	return (
		<SectionWrapper title="Education">
			<EducationItem
				educationItem={{
					id: "",
					course: "",
					institute: "",
					from: "",
					to: "",
					description: "",
				}}
			/>
			<Button variant="contained" color="success">
				ADD
			</Button>
		</SectionWrapper>
	);
};

export default EducationSection;
