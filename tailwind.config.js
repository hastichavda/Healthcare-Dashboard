/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#01F0D0',
          dark: '#072635',
          muted: '#707070',
        },
        chart: {
          systolic: '#E66FD2',
          diastolic: '#8C6FE6',
        },
        vital: {
          respiratory: '#E0F3FA',
          temperature: '#FFE6E9',
          heart: '#FFE6F1',
        },
        surface: {
          DEFAULT: '#F6F7F8',
          card: '#FFFFFF',
          hover: '#F6F7F8',
        },
        status: {
          danger: '#E66FD2',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 0 4px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
