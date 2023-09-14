/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
        special: ["Courier New", "monospace"],
      },
      colors: {
        "blue-500-opacity-50": "rgba(59, 130, 246, 0.5)",
        "indigo-500-opacity-50": "rgba(99, 102, 241, 0.5)",
        "purple-500-opacity-50": "rgba(128, 90, 213, 0.5)",
        "indigo-600-opacity-50": "rgba(79, 70, 229, 0.5)",
      },
    },
  },
  plugins: [],
};
