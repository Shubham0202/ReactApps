
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'secondary-white': '#ffffff9e',
        'primary-green': '#1eff5d',
        'star-shine': '#24262d',
        'custom-orange': '#ff6458',
        'custom-pink': '#8362fd',
        'dull-black': '#0101018b',
       }
    },
  },
  plugins: [
  ],
}
