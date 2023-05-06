import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";

import "./styles/header.css";

interface HeaderProps {
	firstName: string;
	lastName: string;
	title: string;
	email: string;
	phone: string;
}

const Header = ({ firstName, lastName, title, email, phone }: HeaderProps) => {
	return (
		<header className="header">
			<div className="header-profile">
				<h1>{firstName + " " + lastName}</h1>
				<h3>{title}</h3>
			</div>
			<div className="header-details">
				<div>
					<Email fontSize="small" />
					{email}
				</div>
				<div>
					<Phone fontSize="small" />
					{phone}
				</div>
			</div>
		</header>
	);
};

export default Header;
