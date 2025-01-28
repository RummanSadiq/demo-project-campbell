/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2160FD', secondary: '#0A4DF5' },
        foreground: { DEFAULT: '#FAFAFA', secondary: '#282828' },

        muted: { DEFAULT: '#EFEFEF', secondary: '#707070' },
        border: { DEFAULT: '#EFEFEF', light: '#F5F5F5' },
        teal: '#21CCEE',
        blue: {
          light: '#A6F0FC',
          mild: '#0C8AB2',
          'extra-light': '#06AED4',
          subtle: '#D8E4FF',
          dark: '#0D4CE1',
        },
        pink: { DEFAULT: '#F670C7', dark: '#EE45BC' },
      },
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '0.5rem',
      },
      backgroundImage: {
        'pink-blur-gradient': 'linear-gradient(270deg, rgba(254, 240, 249, 0) 0%, #FEF0F9 66.65%)',
        'blue-blur-gradient': 'linear-gradient(270deg, rgba(216, 228, 255, 0) 0%, #D8E4FF 66.65%)',
        'blue-gradient': `
          linear-gradient(180deg, #CAF6FD, #CAF6FD),
          linear-gradient(180deg, #CAF6FD 0%, #F4FDFE 100%)
        `,
        'dark-blue-gradient':
          'linear-gradient(180deg, #D8E4FF, #F6FFFF), linear-gradient(180deg, #CAF6FD 0%, #CAF6FD 100%)',
        'pink-gradient':
          'linear-gradient(180deg, #FFDEF3, #FEF0F9), linear-gradient(180deg, #CAF6FD 0%, #CAF6FD 100%)',
      },
      spacing: {
        75: '18.75rem',
      },
      boxShadow: {
        'custom-1': '0px 1px 0px 0px #0000000F',
        'custom-2': '0px 2px 4px 0px #0000000A',
      },
    },
  },
  plugins: [],
};
