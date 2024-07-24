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
        primary: {
          50: "#E4E7E7",
          100: "#C8CECE",
          200: "#929D9D",
          300: "#5C6C6D",
          400: "#263B3C",
          500: "#162828",
          600: "#112020",
          700: "#0D1818",
          800: "#081010",
          900: "#040808",
          950: "#020404",
        },
        secondary: {
          50: "#E6F4EA",
          100: "#CCE9D5",
          200: "#99D3AB",
          300: "#66BD82",
          400: "#33A759",
          500: "#008F31", // Primary Green
          600: "#007A29",
          700: "#006520",
          800: "#004F18",
          900: "#003A0F",
          950: "#002B0A",
        },
        tertiary: {
          50: "#E5F6FD",
          100: "#CCECFB",
          200: "#99D9F7",
          300: "#66C5F3",
          400: "#33B2EF",
          500: "#009EEB", // Secondary Blue
          600: "#0086C8",
          700: "#0070A6",
          800: "#005984",
          900: "#004262",
          950: "#003250",
        },
        accent: {
          50: "#F4ECE9",
          100: "#E9D8D4",
          200: "#D3B1A8",
          300: "#BC8A7D",
          400: "#A66451",
          500: "#8F432E",
          600: "#723525",
          700: "#55271B",
          800: "#381912",
          900: "#1B0C09",
          950: "#0D0604",
        },
        neutral: {
          50: "#ECEBE7",
          100: "#D8D7D4",
          200: "#B1AFAB",
          300: "#8A887D",
          400: "#64514A",
          500: "#43382E",
          600: "#352E24",
          700: "#271D19",
          800: "#1A1210",
          900: "#0D0606",
          950: "#060303",
        },
      },
      boxShadow: {
        box: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "box-md": "0 6px 10px rgba(0, 0, 0, 0.1)",
        "box-lg": "0 8px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
