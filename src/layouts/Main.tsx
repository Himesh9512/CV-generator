import Form from "../components/form/Form";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { useState } from "react";

import { emptyCv } from "../utils/emptyCv";

import { CV } from "../types/cv_interface";
import { InputChange, AddItem, RemoveItem } from "../types/functions_type";

import { v4 as uuidv4 } from "uuid";

const Main = () => {
	const [cvState, setCvState] = useState<CV>(emptyCv);

	// handle all input field changes in form
	const handleInputChange: InputChange = (e, section, index) => {
		const { id, value } = e.target as HTMLInputElement;

		if (section === "personalDetails" || typeof index === "undefined") {
			setCvState((prevState) => ({
				...prevState,
				personalDetails: {
					...prevState.personalDetails,
					[id]: value,
				},
			}));
		} else {
			setCvState((prevState) => ({
				...prevState,
				[section]: [
					...prevState[section].slice(0, index),
					{
						...prevState[section][index],
						[id]: value,
					},
					...prevState[section].slice(index + 1),
				],
			}));
		}
	};

	// handle the add of new item in education/experience section
	const handleAddItem: AddItem = (section): void => {
		if (section == "education") {
			const id: string = uuidv4();
			setCvState((prevState) => ({
				...prevState,
				education: [
					...prevState.education,
					{
						id,
						course: "",
						institute: "",
						from: "",
						to: "",
						description: "",
					},
				],
			}));
		} else {
			const id: string = uuidv4();
			setCvState((prevState) => ({
				...prevState,
				experience: [
					...prevState.experience,
					{
						id,
						position: "",
						company: "",
						from: "",
						to: "",
						description: "",
					},
				],
			}));
		}
	};

	// handle the add of new item in education/experience section
	const handleRemoveItem: RemoveItem = (id, section): void => {
		setCvState((prevState) => ({
			...prevState,
			[section]: [...prevState[section]].filter((item) => item.id !== id),
		}));
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
