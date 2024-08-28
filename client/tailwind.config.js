/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#E86100',
        secondaryOrange: '#FE3E02',
        primaryYellow: '#FFD605',
        primaryBlue: '#017EB4',
        footerMainTheme: '#181818',
        primaryGray: '#5c6370',
        notWhite: '#FCFCFC'
      },
    },
  },
  plugins: [],
};
