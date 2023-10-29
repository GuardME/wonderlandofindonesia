/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "light-gray": "hsl(219, 4%, 32%)",
        "dark-gray": "hsl(219, 4%, 24%)",
      },
      backgroundColor: {
        "frame-bg": "rgba(0, 0, 0, .87);",
      },
      backgroundImage: {
        "1-bg": "url(/photo-1.jpeg)",
        "2-bg": "url(/photo-2.jpeg)",
        "3-bg": "url(/photo-4.jpeg)",
        "4-bg": "url(/photo-5.jpeg)",
        "5-bg": "url(/photo-6.jpeg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
