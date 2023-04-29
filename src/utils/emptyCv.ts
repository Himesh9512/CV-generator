import { CV } from "../interfaces/cv_interface";

export const emptyCv: CV = {
	personalDetails: {
		firstName: "",
		lastName: "",
		title: "",
		email: "",
		phone: "",
		summary: "",
	},
	education: [],
	experience: [],
};
