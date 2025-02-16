/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			sm: "640px", // Small screens (Mobile)
			md: "768px", // Medium screens (Tablets)
			lg: "1024px", // Large screens (Laptops)
			xl: "1280px", // Extra Large screens (Desktops)
			"2xl": "1536px", // Ultra-Wide Screens
		},
	},
	plugins: [],
};
