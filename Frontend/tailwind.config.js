/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        xss: '350px',
        ls: '450px',
        sl: '512px',
      },
      keyframes: {
        'horizontal-bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.7)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '80%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'horizontal-bounce': 'horizontal-bounce 1s infinite ease-in-out',
        bounceIn: 'bounceIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
