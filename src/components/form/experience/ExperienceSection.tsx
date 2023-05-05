import { Experience } from "../../../interfaces/cv_interface";
import SectionWrapper from "../SectionWrapper";
import ExperienceItem from "./ExperienceItem";
import Button from "@mui/material/Button";

interface ExperienceProps {
	experience: Experience[];
}

const ExperienceSection = ({ experience }: ExperienceProps) => {
	return (
		<SectionWrapper title="Experience">
			<ExperienceItem
				experienceItem={{
					id: "",
					position: "",
					company: "",
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

export default ExperienceSection;
