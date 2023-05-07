import { v4 as uuidv4 } from "uuid";
import { CV } from "../types/cv_interface";

export const exampleCv: CV = {
	personalDetails: {
		firstName: "Himesh",
		lastName: "Suthar",
		title: "Software Engineer",
		email: "himesh@example.com",
		phone: "12345-67890",
		summary:
			"As a software engineer, I excel at developing innovative solutions using Java, Python, and C++. With expertise in software design, development, testing, and deployment, I am a skilled problem solver who thrives in dynamic, fast-paced environments. I am a collaborative team player with experience in mobile app development and complex enterprise systems.",
	},
	education: [
		{
			id: uuidv4(),
			course: "B.Tech",
			institute: "Best University",
			from: "2019",
			to: "2022",
			description:
				"Studying for a B.Tech degree at a Best university can be a challenging yet rewarding experience. The curriculum is designed to provide students with a strong foundation in engineering principles and practical skills.",
		},
		{
			id: uuidv4(),
			course: "JavaScript Course",
			institute: "Best Academy",
			from: "2019",
			to: "2022",
			description:
				"In this Javascript course, I gained a deep understanding of core language concepts and applied them to build dynamic web applications",
		},
	],
	experience: [
		{
			id: uuidv4(),
			position: "Frontend Developer",
			company: "Best Company",
			from: "2022",
			to: "present",
			description:
				"During my tenure as a frontend developer at Best Company, I leveraged my expertise in HTML, CSS, and JavaScript to design and develop visually stunning and highly functional user interfaces. By collaborating with cross-functional teams, I ensured seamless integration of frontend components with backend services and APIs",
		},
	],
};
