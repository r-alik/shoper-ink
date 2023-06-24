/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        walking: {
          '0%': { 'background-position': '0 0' },
          '20%': { 'background-position': '50% 0' },
          '40%': { 'background-position': '100% 0' },
          '60%': { 'background-position': '50% 0' },
          '80%': { 'background-position': '0 0' },
          '100%': { 'background-position': '50% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.3, transform: 'scale(0.8)' },
        },
      },
      animation: {
        walking: 'walking 10000ms linear 1',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'walking-bag': "url('/icons/bag.svg')",
      },
      screens: {
        widescreen: {
          raw: '(min-aspect-ratio: 3/2)',
        },
        tallscreen: {
          raw: '(max-aspect-ratio: 13/20)',
        },
      },

      colors: {
        Accent: {
          light: '#FF9C08',
          dark: '#F08200',
        },
        Peach: {
          DEFAULT: '#FEF9F2',
          dark: '#FFD4A4',
        },
        Gray: {
          lightest: '#F0ECE8',
          light: '#989898',
          DEFAULT: '#6E6E6E',
          dark: '#3F3F3F',
        },
        Txt: {
          darkest: '#090909',
          dark: '#222222',
        },
      },
      // fontFamily: { '': ['...', '...'] },
    },
  },
  plugins: [],
};
