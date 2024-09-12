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
        'seo-bg': "url('/assets/img/seo_bg.svg')",
        'seo-bg_2': "url('/assets/img/seo_bg_2.svg')",
        'testimonals_bg':"url('/assets/img/testimonals_bg.svg')",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;