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
        ivory: "#F6F1E8",
        paper: "#EFE8DB",
        forest: {
          DEFAULT: "#1F3A2E",
          deep: "#15261E",
          mid: "#2E5342",
          soft: "#3F6B55",
        },
        ink: "#1A1A16",
        stone: "#6B6560",
        clay: "#8C6A4F",
        mist: "#D8D2C6",
        dawn: "#E8D9C4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.08em",
      },
      maxWidth: {
        editorial: "72rem",
        measure: "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
