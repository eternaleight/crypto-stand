/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "540px" },
    },
    extend: {
      fontFamily: {
        noto: 'Noto Sans JP, sans-serif',
      },
      height: {
        "half-screen": "50vh",
      },
      letterSpacing: {
        tight: "0.3px",
      },
    },
  },
  plugins: [],
  important: true,
}
