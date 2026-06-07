import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 needed for your toggle
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;