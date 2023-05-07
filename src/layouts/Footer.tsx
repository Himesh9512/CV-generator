import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0,
				bgcolor: "black",
				color: "white",
			}}
			elevation={3}
			square>
			<Box textAlign="center" margin={1}>
				<Typography variant="h6" component="h6">
					CREATED BY{" "}
					<Link href="https://github.com/Himesh9512" target="_blank">
						HIMESH
					</Link>
				</Typography>
			</Box>
		</Paper>
	);
};

export default Footer;
