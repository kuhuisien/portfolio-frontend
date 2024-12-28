/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#121212",
        },
        light: {
          50: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
