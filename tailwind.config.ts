import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': ' 4rem'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'fundo': '#18181B',
        'botoes': '#8B5CF64D',
        'cor1': '#7E22CE',
        'cor2': '#3B0764B2',
        'shadow': '#A855F7',
        'destaquesc1': '#A178FF',
        'destaquesc2': '#822FD1',
        '': ''
        
      },

      spacing: {
        '4xl': '5rem',
        '84': '23rem',
        '98': '26rem',
        '124': '34rem',
        '128': '42rem',
        '129': '48rem',
        '130': '58rem',
        '136': '54rem',
        '148': '64rem'
      }
    },
  },
  plugins: [],
};
export default config;
