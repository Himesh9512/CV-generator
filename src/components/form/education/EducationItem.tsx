import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Education } from "../../../interfaces/cv_interface";

interface EducationProps {
	educationItem: Education;
}

const EducationItem = ({ educationItem }: EducationProps) => {
	const { id, course, institute, from, to, description }: Education = educationItem;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}>
			<TextField
				fullWidth
				id="course"
				label="Course/Degree"
				variant="outlined"
				size="small"
				placeholder="B.tech"
				margin="dense"
				type="text"
				value={course}
			/>
			<TextField
				fullWidth
				id="institute"
				label="Institute"
				variant="outlined"
				size="small"
				placeholder="Best University"
				margin="dense"
				type="text"
				value={institute}
			/>
			<TextField
				fullWidth
				id="from"
				label="From"
				variant="outlined"
				size="small"
				placeholder="May 2019"
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
				placeholder="April 2022"
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

export default EducationItem;
