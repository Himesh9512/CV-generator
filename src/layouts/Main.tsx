import Form from "../components/form/Form";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { FormEvent, useState } from "react";

import { CV } from "../interfaces/cv_interface";
import { emptyCv } from "../utils/emptyCv";

const Main = () => {
	const [cvState, setCvState] = useState<CV>(emptyCv);

	// handle all input field changes in form
	const handleInputChange = (
		e: FormEvent<HTMLDivElement>,
		section: "personalDetails" | "education" | "experience"
	): void => {
		const { id, value } = e.target as HTMLInputElement;

		if (section == "personalDetails") {
			setCvState((prevState) => ({
				...prevState,
				personalDetails: {
					...prevState.personalDetails,
					[id]: value,
				},
			}));
		} else {
			setCvState(emptyCv);
		}
	};

	// handle the add of new item in education/experience section
	const handleAddItem = (section: "education" | "experience"): void => {
		console.log("section: ", section);
	};

	// handle the add of new item in education/experience section
	const handleRemoveItem = (index: number, section: "education" | "experience"): void => {
		console.log("index: ", index, " section: ", section);
	};

	return (
		<Container>
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<Form
						cv={cvState}
						handleInputChange={handleInputChange}
						handleAddItem={handleAddItem}
						handleRemoveItem={handleRemoveItem}
					/>
				</Grid>
				<Grid item xs={6}>
					cv
				</Grid>
			</Grid>
		</Container>
	);
};

export default Main;
