import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mlg':{'min': '1023px'},

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },

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
        'cor1': '#7e47ff',
        'cor2': '#986cfe',
        'shadow': '#822FD1',
        'destaquesc1': '#A178FF',
        'destaquesc2': '#822FD1',
        'planos1': '#8959F699',
        'planos2': '#390A6684',
        'btplanos': '#AE8AFF99',
        'btplanos2': '#8738D26D',
        'azure': '#B76CFF',
        'footer1': '#9262FF',
        'footer2': '#4C0590',
        'purple500': '##9933FB',
        'circulo1': '#7E22CE',
        'circulo2': '#3B0764B2'
      },

      spacing: {
        '0.4': '2px',
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
