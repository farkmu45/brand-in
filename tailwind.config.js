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
          50: '#fef2f2',
          100: '#ffe1e1',
          200: '#ffc8c8',
          300: '#ffa2a3',
          400: '#fc6d6e',
          500: '#f54748',
          600: '#e22021',
          700: '#be1718',
          800: '#9d1718',
          900: '#821a1b',
          950: '#470808',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
