export interface PersonalDetails {
	firstName: string;
	lastName: string;
	title: string;
	email: string;
	phone: string;
	summary: string;
}

export interface Education {
	id: string;
	course: string;
	institute: string;
	from: string;
	to: string;
	description: string;
}

export interface Experience {
	id: string;
	position: string;
	company: string;
	from: string;
	to: string;
	description: string;
}

export interface CV {
	personalDetails: PersonalDetails;
	education: Education[];
	experience: Experience[];
}
