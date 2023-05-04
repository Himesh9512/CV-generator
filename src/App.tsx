import { FC, useState } from "react";

import { CV } from "./interfaces/cv_interface";
import { emptyCv } from "./utils/emptyCv";

import Main from "./layouts/Main";

const App: FC = () => {
	const [cvState, setCvState] = useState<CV>(emptyCv);
	return <div className="App">
		<Main cv={cvState} />
	</div>;
};

export default App;
