/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./.{html,js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'white': 'hsl(0, 0%, 100%)',
			'gray-light': 'hsl(212, 45%, 89%)',
			'gray-blue': 'hsl(220, 15%, 55%)',
			'blue-dark': 'hsl(218, 44%, 22%)'
		},
		fontFamily: {
			sans: ['Outfit', 'sans-serif']
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
};
