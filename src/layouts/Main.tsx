import Form from "../components/form/Form";
import Preview from "../components/cv/Preview";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useEffect, useState, useRef } from "react";

import { emptyCv } from "../utils/emptyCv";

import { CV } from "../types/cv_interface";
import { exampleCv } from "../utils/example";
import { InputChange, AddItem, RemoveItem } from "../types/functions_type";

import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";

const Main = () => {
	const [cvState, setCvState] = useState<CV>(emptyCv);
	const componentRef = useRef(null);

	useEffect(() => {
		setCvState(exampleCv);
	}, []);

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

	// Reset/Clear the Cv data
	const handleResetCv = (): void => setCvState(emptyCv);

	// Load example data
	const handleLoadExample = (): void => setCvState(exampleCv);

	// Print the CV
	const handlePrint = useReactToPrint({ content: () => componentRef.current });

	return (
		<Box marginX={10}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Form
						cv={cvState}
						handleInputChange={handleInputChange}
						handleAddItem={handleAddItem}
						handleRemoveItem={handleRemoveItem}
						handleResetCv={handleResetCv}
						handleLoadExample={handleLoadExample}
						handlePrint={handlePrint}
					/>
				</Grid>
				<Grid item xs={6}>
					<Preview cv={cvState} ref={componentRef} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Main;
