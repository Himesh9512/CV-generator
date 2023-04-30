import React, { FC } from "react";

const Section: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div className="m-3 h-full overflow-scroll border-2 border-black p-3">{children}</div>;
};

export default Section;
