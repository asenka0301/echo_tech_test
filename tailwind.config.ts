import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {},
      colors: {
        bg: {
          DEFAULT: "#fff",
        },
        text: {
          DEFAULT: "#000",
        },
        primary: {
          DEFAULT: "#578c62",
        },
        border: {
          DEFAULT: "#d7dbe2",
        },
      },
      screens: {
        xs: "340px",
        sm: "480px",
        md: "640px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
