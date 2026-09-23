/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        prosperus: {
          green: '#0B3C2D',
          gold: '#C5A059',
          dark: '#072B20',
          light: '#FAF9F6',
        }
      }
    },
  },
  plugins: [],
}
