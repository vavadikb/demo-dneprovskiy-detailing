import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0f9f4",
          100: "#dcf0e6",
          200: "#bbe1ce",
          300: "#8dcaad",
          400: "#52b788",
          500: "#2d9e6b",
          600: "#1e7f54",
          700: "#1a6644",
          800: "#185238",
          900: "#14422e",
          950: "#0a2419",
        },
        forest: {
          DEFAULT: "#1a3d2b",
          dark: "#0f2419",
          light: "#2d6a4f",
        },
        cream: "#f5f7f2",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
