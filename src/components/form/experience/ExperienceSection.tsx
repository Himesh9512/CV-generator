import { Experience } from "../../../types/cv_interface";
import SectionWrapper from "../SectionWrapper";
import ExperienceItem from "./ExperienceItem";
import Button from "@mui/material/Button";
import { AddItem, InputChange, RemoveItem } from "../../../types/functions_type";

interface ExperienceProps {
	experience: Experience[];
	handleInputChange: InputChange;
	handleAddItem: AddItem;
	handleRemoveItem: RemoveItem;
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
