import type { Config } from 'tailwindcss'

// const config: Config 
module.exports = {
  content: [
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/projects/**/*.{js,ts,jsx,tsx,mdx}',


  ],
  safelist: [
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
    'bg-blue-100',
    'bg-blue-200',
    'bg-blue-300',
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'bg-red-100',
    'bg-red-200',
    'bg-red-300',
    'bg-red-400',
    'bg-red-500',
    'bg-red-600',
    'bg-orange-100',
    'bg-orange-200',
    'bg-orange-300',
    'bg-orange-400',
    'bg-orange-500',
    'bg-orange-600',
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-yellow-300',
    'bg-yellow-400',
    'bg-yellow-500',
    'bg-yellow-600',
    'bg-brown',
    'bg-white',
    'dark:bg-green-100',
    'dark:bg-green-200',
    'dark:bg-green-300',
    'dark:bg-green-400',
    'dark:bg-green-500',
    'dark:bg-green-600',
    'dark:bg-blue-100',
    'dark:bg-blue-200',
    'dark:bg-blue-300',
    'dark:bg-blue-400',
    'dark:bg-blue-500',
    'dark:bg-blue-600',
    'dark:bg-purple-100',
    'dark:bg-purple-200',
    'dark:bg-purple-300',
    'dark:bg-purple-400',
    'dark:bg-purple-500',
    'dark:bg-purple-600',
    'dark:bg-red-100',
    'dark:bg-red-200',
    'dark:bg-red-300',
    'dark:bg-red-400',
    'dark:bg-red-500',
    'dark:bg-red-600',
    'dark:bg-orange-100',
    'dark:bg-orange-200',
    'dark:bg-orange-300',
    'dark:bg-orange-400',
    'dark:bg-orange-500',
    'dark:bg-orange-600',
    'dark:bg-yellow-100',
    'dark:bg-yellow-200',
    'dark:bg-yellow-300',
    'dark:bg-yellow-400',
    'dark:bg-yellow-500',
    'dark:bg-yellow-600',
    'dark:bg-brown',
    'dark:bg-white',

  ],
  darkMode: 'class',
  theme: {
    colors: {
      purple: {
        100: '#F1E9F3',
        200: '#CDBADB',
        300: '#AC83BB',
        400: '#9C7DB3',
        500: '#65477A',
        600: '#26093B'
      },
      red: {
        100: '#FDE5E0',
        200: '#F8AB99',
        300: '#F47A60',
        400: '#D27762',
        500: '#8B3A28',
        600: '#40140A'
      },
      orange: {
        100: '#FEEBCE',
        200: '#FCCA7E',
        300: '#FAA726',
        400: '#D5922D',
        500: '#91621D',
        600: '#492F09'
      },
      yellow: {
        100: '#FFF6D0',
        200: '#FFE070',
        300: '#FFD334',
        400: '#D9B431',
        500: '#92781B',
        600: '#3A2F0A'
      },
      green: {
        100: '#EEF6E4',
        200: '#C6E1AB',
        300: '#B1D67C',
        400: '#97BB72',
        500: '#5C7F39',
        600: '#243D09'
      },
      blue: {
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
      DEFAULT: '10px',
      inner: '7px'
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

// export default config
