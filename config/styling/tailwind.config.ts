import type { Config } from "tailwindcss";
import { join } from "path";

export default {
  content: [
    join(__dirname, "../../src/app/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../src/components/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
