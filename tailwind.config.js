/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2160FD' },
        foreground: { DEFAULT: '#FAFAFA', secondary: '#282828' },
        border: { DEFAULT: '#EFEFEF' },
        teal: '#21CCEE',
      },
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '0.5rem',
      },
    },
  },
  plugins: [],
};
