/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F5EFE6",
        espresso: "#1C1510",
        caramel: "#C8A882",
        foam: "#E8D5C0",
        roasted: "#8B5E3C",
        chocolate: "#2D1F14"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        serif: ["Libre Baskerville", "serif"],
        sans: ["DM Sans", "sans-serif"],
        accent: ["Cormorant SC", "serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(28, 21, 16, 0.12)",
        glow: "0 18px 45px rgba(139, 94, 60, 0.25)"
      }
    }
  },
  plugins: []
};
