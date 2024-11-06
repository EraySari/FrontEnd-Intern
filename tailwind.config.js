/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        even: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "#FFFFFF",
        metric: "#101010",
      },
    },
  },
  plugins: [],
};
