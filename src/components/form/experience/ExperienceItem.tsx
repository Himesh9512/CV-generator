import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Experience } from "../../../interfaces/cv_interface";

interface ExperienceProps {
	experienceItem: Experience;
}

const ExperienceItem = ({ experienceItem }: ExperienceProps) => {
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
			/>
			<Button variant="contained" color="error">
				delete
			</Button>
		</Box>
	);
};

export default ExperienceItem;
