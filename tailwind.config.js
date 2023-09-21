module.exports = {
	content: [
		'./src/index.html',
		'./src/index.tsx',
		'./src/App.tsx',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				white: {
					200: '#F0EBFA',
					300: 'F6F3FC',
					DEFAULT: '#FFFFFF',
				},
				green: {
					300: '#F2F9EB',
					DEFAULT: '#81C43B',
				},
				gray: {
					200: '#E1E5EA',
					300: '#97A5B5',
					400: '#4E5A65',
					DEFAULT: '#35414B',
					900: '1D2830',
				},
				purple: {
					200: '#ECE5FF',
					DEFAULT: '#794CFF',
				},
			},
			fontFamily: {
				inter: 'Inter',
				josefinSans: 'Josefin Sans',
				roboto: 'Roboto',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [''],
}
