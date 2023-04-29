import { FC, useState } from "react";

import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import { CV } from "./interfaces/cv_interface";
import { emptyCv } from "./utils/emptyCv";

const App: FC = () => {
	const [cvState, setCvState] = useState<CV>(emptyCv);
	return (
		<div className="">
			<Main />
			<Footer />
		</div>
	);
};

export default App;
