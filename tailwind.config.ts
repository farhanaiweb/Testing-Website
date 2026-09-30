import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f7f7f6',
          100: '#e3e3e0',
          200: '#c8c8c3',
          300: '#a3a39c',
          400: '#7e7e76',
          500: '#63635c',
          600: '#4f4f49',
          700: '#41413c',
          800: '#363633',
          900: '#1a1a18',
          950: '#0f0f0e',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d1',
          200: '#f4de9f',
          300: '#ecc76d',
          400: '#e5b04a',
          500: '#d4952e',
          600: '#b87524',
          700: '#995720',
          800: '#7d4620',
          900: '#673a1e',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf2e0',
          300: '#f5e8c8',
          400: '#eed9a3',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
