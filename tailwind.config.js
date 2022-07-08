module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Edu: ['Edu QLD Beginner, cursive'],
				Montserrat: ['Montserrat, sans-serif'],
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#070d20',
					secondary: '#40e7e5',
					accent: '#0b3f69',
					neutral: '#09112b',
					info: '#3bebe8',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
