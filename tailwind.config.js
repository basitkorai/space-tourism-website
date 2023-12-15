/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      sans_cond: ['Barlow Condensed', 'sans-serif'],
      serif: ['Bellefair', 'sans-serif'],
    },
    letterSpacing: {
      wide: '0.14763rem',
      wider: '2.7px',
      widest: '0.29531rem'
    },
    screens: {
      'smallest': '320px',
      'tall': { 'raw': '(max-height: 56.1875em) and (min-width: 48em)' },
      ...defaultTheme.screens,
      // => @media (min-height: 900px) { ... }
    },
    extend: {
      colors: {
        space: '#0B0D17',
        accent: '#D0D6F9',
        navcolor: '#FFFFFF0A',
        translucent: '#ffffff40',
        grey: '#ffffff2b',
      },
      fontSize: {
        h1: '9.375rem',
        h2: '6.25rem',
        h3: '3.5rem',
        h4: '2rem',
        h5: '1.75rem',
        sh1: '1.75rem',
        sh2: ['0.875rem', {
          letterSpacing: "0.14763rem"
        }],
        navtext: '1rem',
        body: '1.125rem',
      },
      backdropBlur: {
        spaceblur: '40.774227142333984px'
      },

    },
  },
  plugins: [],
}