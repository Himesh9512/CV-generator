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
	education: [{ id: "", course: "", institute: "", from: "", to: "", description: "" }],
	experience: [{ id: "", position: "", company: "", from: "", to: "", description: "" }],
};
