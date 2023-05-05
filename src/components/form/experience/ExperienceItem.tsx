import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Experience } from "../../../types/cv_interface";
import { InputChange, RemoveItem } from "../../../types/functions_type";

interface ExperienceProps {
	index: number;
	experienceItem: Experience;
	handleInputChange: InputChange;
	handleRemoveItem: RemoveItem;
}

const ExperienceItem = ({
	index,
	experienceItem,
	handleInputChange,
	handleRemoveItem,
}: ExperienceProps) => {
	const { id, position, company, from, to, description }: Experience = experienceItem;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}>
			<TextField
				fullWidth
				id="position"
				label="Position"
				variant="outlined"
				size="small"
				placeholder="Frontend Developer"
				margin="dense"
				type="text"
				value={position}
				onInput={(e) => handleInputChange(e, "experience", index)}
			/>
			<TextField
				fullWidth
				id="company"
				label="Company"
				variant="outlined"
				size="small"
				placeholder="Best Company"
				margin="dense"
				type="text"
				value={company}
				onInput={(e) => handleInputChange(e, "experience", index)}
			/>
			<TextField
				fullWidth
				id="from"
				label="From"
				variant="outlined"
				size="small"
				placeholder="June 2022"
				margin="dense"
				type="text"
				value={from}
				onInput={(e) => handleInputChange(e, "experience", index)}
			/>
			<TextField
				fullWidth
				id="to"
				label="To"
				variant="outlined"
				size="small"
				placeholder="September 2022"
				margin="dense"
				type="text"
				value={to}
				onInput={(e) => handleInputChange(e, "experience", index)}
			/>
			<TextField
				multiline
				fullWidth
				id="description"
				label="Description"
				variant="outlined"
				size="small"
				placeholder="description..."
				margin="normal"
				type="text"
				value={description}
				onInput={(e) => handleInputChange(e, "experience", index)}
			/>
			<Button variant="contained" color="error">
				remove
			</Button>
		</Box>
	);
};

export default ExperienceItem;
