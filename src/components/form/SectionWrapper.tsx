import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { ReactNode } from "react";

interface SectionProps {
	title: string;
	children?: ReactNode;
}
const SectionWrapper = ({ title, children }: SectionProps) => {
	return (
		<Paper
			elevation={2}
			sx={{
				padding: 2,
				display: "flex",
				flexDirection: "column",
				gap: 1,
				border: "1px solid grey",
			}}>
			<Typography variant="h5" component="h2" marginBottom={2}>
				{title}
			</Typography>
			{children}
		</Paper>
	);
};

export default SectionWrapper;
