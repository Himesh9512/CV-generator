import { FC, useState } from "react";

import { CV } from "./interfaces/cv_interface";
import { emptyCv } from "./utils/emptyCv";

const App: FC = () => {
	const [cvState, setCvState] = useState<CV>(emptyCv);
	return <div className="App"></div>;
};

export default App;
