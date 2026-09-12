import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f6f8f9",
          100: "#e9eef1",
          200: "#cfd9df",
          300: "#aabdc7",
          400: "#7e99a8",
          500: "#607d8b",
          600: "#4f6874",
          700: "#435762",
          800: "#3b4a52",
          900: "#344148",
        },
        gauge: {
          500: "#0f766e",
          600: "#0d625c",
          700: "#0b4f4a",
        },
      },
      boxShadow: {
        panel: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
