import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        purple:{
          100: '#F1E9F3',
          200: '#CDBADB',
          300: '#AC83BB',
          400: '#9C7DB3',
          500: '#65477A',
          600: '#26093B'
        },
        red:{
          100: '#FDE5E0',
          200: '#F8AB99',
          300: '#F47A60',
          400: '#D27762',
          500: '#8B3A28',
          600: '#40140A'
        },
        orange:{
          100: '#FEEBCE',
          200: '#FCCA7E',
          300: '#FAA726',
          400: '#D5922D',
          500: '#91621D',
          600: '#492F09'
        },
        yellow:{
          100: '#FFF6D0',
          200: '#FFE070',
          300: '#FFD334',
          400: '#D9B431',
          500: '#92781B',
          600: '#3A2F0A'
        },
        green:{
          100: '#EEF6E4',
          200: '#C6E1AB',
          300: '#B1D67C',
          400: '#97BB72',
          500: '#5C7F39',
          600: '#243D09'
        },
        blue:{
          100: '#E9F6FA',
          200: '#B8E4F0',
          300: '#86D4EB',
          400: '#7DB9CA',
          500: '#3B7E91',
          600: '#08303C'
        },
        brown: '#221603',
        white: '#FFFFFF',
    },
    fontFamily: {
      display: ['Fredoka', 'sans-serif'],
      body: ['Fredoka', 'sans-serif'],
    },
    borderRadius: {
      DEFAULT: '10px'
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

  
    },
  },
  plugins: [],
}
export default config
