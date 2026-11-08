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
        ink: "#07111f",
        panel: "#0c1929",
        orange: "#ff9900",
        cream: "#f4f0e7",
        mint: "#72e6c3",
      },
      boxShadow: {
        glow: "0 0 60px rgba(255, 153, 0, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
