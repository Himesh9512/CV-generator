import { FormEvent } from "react";
import { Education } from "../../../types/cv_interface";

import SectionWrapper from "../SectionWrapper";
import EducationItem from "./EducationItem";
import Button from "@mui/material/Button";
import { AddItem, InputChange, RemoveItem } from "../../../types/functions_type";

interface EducationProps {
	education: Education[];
	handleInputChange: InputChange;
	handleAddItem: AddItem;
	handleRemoveItem: RemoveItem;
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
