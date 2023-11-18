/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
	theme: {
			extend: {
					screens: {
							'navbarmin': '910px',
							'mainbp': '1740px',
							'resourcemin': '861px',
					},
					colors: {
							"navbar": "#760EC2",
							"navbartext": "#FFB84C",
							"containerbg": "#5310C6",
							"background": "#aba5d9",
							"goldhl": "#FFD700",
					},
					fontFamily: {
							"poppins": ["Poppins"],

					}

			},
	},
  plugins: [],
}

