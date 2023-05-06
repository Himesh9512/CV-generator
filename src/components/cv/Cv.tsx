import Header from "./Header";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { CV } from "../../types/cv_interface";

interface CvProps {
	cv: CV;
}
const Cv = ({ cv }: CvProps) => {
	const { personalDetails, education, experience }: CV = cv;
	return (
		<Box padding={2} component="div">
			<Paper elevation={3}>
				<Box>
					<Header
						firstName={personalDetails.firstName}
						lastName={personalDetails.lastName}
						title={personalDetails.title}
						email={personalDetails.email}
						phone={personalDetails.phone}
					/>
				</Box>
				<Container>container</Container>
			</Paper>
		</Box>
	);
};

export default Cv;
