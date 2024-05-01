import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    colors: {
      harp: "#deede1",
      manz: "#e9ed68",
      blueStone: "#005c4e",
    },
  },
  plugins: [],
};

export default config;
