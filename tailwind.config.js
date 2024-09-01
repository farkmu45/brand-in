/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce7e7',
          200: '#f8d3d5',
          300: '#f2afb1',
          400: '#ea8288',
          500: '#da4450',
          600: '#c93548',
          700: '#a9273b',
          800: '#8d2437',
          900: '#792235',
          950: '#430e18',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
