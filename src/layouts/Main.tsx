import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Form from "../components/form/Form";

import { CV } from "../interfaces/cv_interface";

interface MainProps {
	cv: CV;
}
const Main = ({ cv }: MainProps) => {
	return (
		<Container>
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<Form cv={cv} />
				</Grid>
				<Grid item xs={6}>
					cv
				</Grid>
			</Grid>
		</Container>
	);
};

export default Main;
