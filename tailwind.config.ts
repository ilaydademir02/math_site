import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F5",
        ink: {
          DEFAULT: "#1A2233",
          soft: "#3D4759",
          faint: "#6B7488",
        },
        accent: {
          DEFAULT: "#3E5C9A",
          soft: "#6B84B8",
          dark: "#2C4373",
        },
        line: "#E3E0D6",
        night: {
          bg: "#10141C",
          surface: "#161B26",
          text: "#E7E5DD",
          soft: "#A7ADBC",
          line: "#26303F",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      maxWidth: {
        prose: "42rem",
        content: "56rem",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1A2233",
            "--tw-prose-headings": "#1A2233",
            "--tw-prose-links": "#3E5C9A",
            maxWidth: "none",
            a: { fontWeight: "500", textDecoration: "underline", textUnderlineOffset: "3px" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
