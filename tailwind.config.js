module.exports = {
	content: [
		'./src/index.html',
		'./src/index.tsx',
		'./src/App.tsx',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				laptop: '5rem',
				desktop: '10.3rem',
			},
		},
		extend: {
			screens: {
				mobile: '414px',
				laptop: '1024px',
				desktop: '1440px',
			},
			colors: {
				white: {
					200: '#FBFAFE',
					300: '#F0EBFA',
					400: '#F6F3FC',
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
					900: '#1D2830',
				},
				purple: {
					200: '#ECE5FF',
					400: '#796EFF',
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
