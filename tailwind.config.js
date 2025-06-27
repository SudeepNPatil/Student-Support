/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'xss': '350px',
        'ls': '450px',
        'sl': '512px',
      },
      keyframes: {
        'horizontal-bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        'horizontal-bounce': 'horizontal-bounce 1s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

