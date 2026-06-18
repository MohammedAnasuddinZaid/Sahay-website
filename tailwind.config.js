/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1C17',
        pine: '#173328',
        moss: '#244C3D',
        ember: '#D97706',
        cream: '#F8F4EC',
        fog: '#A7B1AA',
        gold: '#E7A94B',
        clay: '#B85F2E',
        rosewood: '#7B2F24',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        ember: '0 22px 70px rgba(217, 119, 6, 0.22)',
        soft: '0 24px 90px rgba(0, 0, 0, 0.24)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 30%, rgba(248,244,236,0.05), transparent 22rem), radial-gradient(circle at 80% 10%, rgba(217,119,6,0.09), transparent 18rem)',
      },
    },
  },
  plugins: [],
};
