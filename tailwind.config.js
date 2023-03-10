/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      brand: {
        900: '#732424',
        500: '#F24B4B'
      },
      gray: {
        900: '#1D1D1D',
        800: '#222222',
        700: '#2B2B2B',
        600: '#585858',
        500: '#343434',
        400: '#7c7c8a',
        100: '#e1e1e6'
      },

      white: '#ffffff',
      black: '#000000'
    },
    extend: {}
  },
  plugins: []
}
