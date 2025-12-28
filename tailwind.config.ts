import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF8F3',
          100: '#F5F1E8',
          200: '#EBE4D5',
          300: '#E0D7C2',
        },
        gold: {
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B8962F',
        },
        blue: {
          700: '#2C5F7C',
          800: '#1E4A5F',
          900: '#0F2A3D',
        },
        olive: {
          500: '#8B9556',
          600: '#6F7845',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;