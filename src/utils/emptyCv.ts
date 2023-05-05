import { v4 as uuidv4 } from "uuid";
import { CV } from "../types/cv_interface";

export const emptyCv: CV = {
	personalDetails: {
		firstName: "",
		lastName: "",
		title: "",
		email: "",
		phone: "",
		summary: "",
	},
	education: [{ id: uuidv4(), course: "", institute: "", from: "", to: "", description: "" }],
	experience: [{ id: uuidv4(), position: "", company: "", from: "", to: "", description: "" }],
};
