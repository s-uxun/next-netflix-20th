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
        Black: "#000000",
        Black_Black: "#121212",
        Gray: "#8C8787",
        White: "#ffffff",
        Red: "#DB202C",
      },
    },
  },
  plugins: [],
};
export default config;
