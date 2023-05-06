import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Education } from "../../../types/cv_interface";
import { InputChange, RemoveItem } from "../../../types/functions_type";

interface EducationProps {
	index: number;
	educationItem: Education;
	handleInputChange: InputChange;
	handleRemoveItem: RemoveItem;
}

const EducationItem = ({
	index,
	educationItem,
	handleInputChange,
	handleRemoveItem,
}: EducationProps) => {
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
				onInput={(e) => handleInputChange(e, "education", index)}
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
				onInput={(e) => handleInputChange(e, "education", index)}
			/>
			<TextField
				fullWidth
				id="from"
				label="From"
				variant="outlined"
				size="small"
				placeholder="2019"
				margin="dense"
				type="text"
				value={from}
				onInput={(e) => handleInputChange(e, "education", index)}
			/>
			<TextField
				fullWidth
				id="to"
				label="To"
				variant="outlined"
				size="small"
				placeholder="2022 / Present"
				margin="dense"
				type="text"
				value={to}
				onInput={(e) => handleInputChange(e, "education", index)}
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
				onInput={(e) => handleInputChange(e, "education", index)}
			/>
			<Button
				sx={{ width: 120, alignSelf: "end" }}
				variant="contained"
				color="error"
				onClick={() => handleRemoveItem(id, "education")}>
				remove
			</Button>
		</Box>
	);
};

export default EducationItem;
