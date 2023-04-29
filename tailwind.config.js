/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				cream: "#F6F1F1",
				blue: {
					light: "#AFD3E2",
					sky: "#19A7CE",
					dark: "#146C94",
				},
			},
		},
	},
	plugins: [],
};
