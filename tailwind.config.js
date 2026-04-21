/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        orbit: 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 140, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 180, 0, 0.55)' },
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
        'orbit-reverse': {
          'from': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          'to': { transform: 'rotate(-360deg) translateX(80px) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
