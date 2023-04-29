import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2 border-t-black p-4 text-xl">
			<span className="px-1">Created by</span>
			<a
				href="https://github.com/Himesh9512"
				target="_blank"
				className="text-blue-dark visited:text-blue-sky">
				Himesh
			</a>
		</footer>
	);
};

export default Footer;
