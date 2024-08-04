/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      ["primary-10"]: "var(--color-primary-10)",
      secondary: "var(--color-secondary)",
      tertiary: "var(--color-tertiary)",
      light: "var(--color-light)",
      lighter: "var(--color-lighter)",
      white: "var(--color-white)",
    },
    extend: {
      boxShadow: {
        filters: "0 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
    },
  },
  plugins: [],
};
