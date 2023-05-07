import SectionWrapper from "./SectionWrapper";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface TopSectionProps {
	handleResetCv: () => void;
	handleLoadExample: () => void;
	handlePrint: () => void;
}

const TopSection = ({ handleResetCv, handleLoadExample, handlePrint }: TopSectionProps) => {
	return (
		<SectionWrapper title="CV GENERATOR">
			<Box display="flex" justifyContent="space-around" width="100%">
				<Button variant="outlined" color="inherit" onClick={handleResetCv}>
					RESET
				</Button>
				<Button variant="outlined" color="inherit" onClick={handleLoadExample}>
					EXAMPLE
				</Button>
				<Button variant="outlined" color="inherit" onClick={handlePrint}>
					PRINT
				</Button>
			</Box>
		</SectionWrapper>
	);
};

export default TopSection;
