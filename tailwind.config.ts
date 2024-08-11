import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'kochi-bg': "url('/assets/img/backgrounds/kochi_bg.png')",
        'kochi-call-icon': "url('/assets/img/kochi_call_icon.png')",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;