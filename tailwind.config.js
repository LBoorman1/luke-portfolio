/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}", "node_modules/flowbite-react/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        'slate-blue': '#735CDD',
        'periwinkle': '#B3C2F2',
        'purple-accent': '#7E007B'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
