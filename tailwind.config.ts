import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {

    screens: {
    sm: "550px",
    md: "768px",
    lg: "1200px"
    },

    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "2rem"
      },
    },
  
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      }
    },

  },

 

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
