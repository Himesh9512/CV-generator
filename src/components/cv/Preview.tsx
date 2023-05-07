import Header from "./Header";
import Body from "./Body";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { CV } from "../../types/cv_interface";
import { forwardRef } from "react";

interface CvProps {
	cv: CV;
}
const Cv = forwardRef(({ cv }: CvProps, ref) => {
	const { personalDetails, education, experience }: CV = cv;
	return (
		<Box
			margin={2}
			padding={2}
			component="div"
			maxWidth={650}
			overflow="scroll"
			border="1px solid black">
			<Box ref={ref} component="div" minWidth={600}>
				<Paper
					elevation={3}
					sx={{
						paddingBottom: 10,
						border: "1px solid black",
						minWidth: "fit-content",
					}}>
					<Header
						firstName={personalDetails.firstName}
						lastName={personalDetails.lastName}
						title={personalDetails.title}
						email={personalDetails.email}
						phone={personalDetails.phone}
					/>
					<Container>
						<Body summary={personalDetails.summary} education={education} experience={experience} />
					</Container>
				</Paper>
			</Box>
		</Box>
	);
});

export default Cv;
