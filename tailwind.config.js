/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"className",
  theme: {
    extend: {
      colors: {
        primary: "#f2b90d",
        "accent-gold": "#FFD700",
        "background-dark": "#050505",
        "glass-white": "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(242, 185, 13, 0.2)",
        "background-light": "#F8FAFC",
        "surface-dark": "#0a0a0a",
        "card-dark": "#111111",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Bebas Neue","Syncopate", "Inter", "sans-serif"],
        accent: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.25rem",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

