/** @type {import('tailwindcss').Config} */
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
        sh2: '0.875rem',
        navtext: '1rem',
        body: '1.125rem',
      },
      backdropBlur: {
        spaceblur: '40.774227142333984px'
      },
      backgroundImage: {
        homemobile: "url('./src/assets/images/home/background-home-mobile.jpg')",
        hometablet: "url('./src/assets/images/home/background-home-tablet.jpg')",
        homedesktop: "url('./src/assets/images/home/background-home-desktop.jpg')",

        destmobile: "url('./src/assets/images/destination/background-destination-mobile.jpg')",
        desttablet: "url('./src/assets/images/destination/background-destination-tablet.jpg')",
        destdesktop: "url('./src/assets/images/destination/background-destination-desktop.jpg')",

        crewmobile: "url('./src/assets/images/crew/background-crew-mobile.jpg')",
        crewtablet: "url('./src/assets/images/crew/background-crew-tablet.jpg')",
        crewdesktop: "url('./src/assets/images/crew/background-crew-desktop.jpg')",

        techmobile: "url('./src/assets/images/technology/background-technology-mobile.jpg')",
        techtablet: "url('./src/assets/images/technology/background-technology-tablet.jpg')",
        techdesktop: "url('./src/assets/images/technology/background-technology-desktop.jpg')",
      }
    },
  },
  plugins: [],
}