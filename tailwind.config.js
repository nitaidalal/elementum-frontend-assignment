/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        white: "#ffffff",
        sage: "#c8d5c0",
        "sage-bg": "#d4dece",
        "pink-hl": "#f7c5d5",
        "green-hl": "#c5e0c5",
        "red-accent": "#e8463c",
        "purple-accent": "#7b5ea7",
        "dark-squiggle": "#1a1a2e",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        elegant: ['"Cormorant Garamond"', "serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
