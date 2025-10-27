import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        kling: {
          50: "#eef7ff",
          100: "#d8ecff",
          200: "#b1d8ff",
          300: "#82c0ff",
          400: "#4da1ff",
          500: "#247fff",
          600: "#0c5fee",
          700: "#084ad1",
          800: "#083ba6",
          900: "#0a3385",
          950: "#071f50"
        }
      },
      boxShadow: {
        glow: "0 10px 40px -15px rgba(36, 127, 255, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
