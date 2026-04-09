/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#05000a',
        violet: {
          DEFAULT: '#3c0080',
          alt: '#830ab5',
          light: '#873cdd',
          pale: '#f4effb',
        },
        turquoise: '#00bbf5',
        'brand-green': '#03ef23',
        offwhite: '#f7f7f7',
        gray1: '#ededed',
        gray2: '#e0e0e0',
        gray3: '#c9c9c9',
        'text-main': '#404040',
      },
      fontFamily: {
        // Stolzl is an Adobe Font - replace 'Poppins' with 'Stolzl' after adding Adobe Fonts kit
        // Add Adobe Fonts kit in app/layout.tsx: <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #03ef23 0%, #00bbf5 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(3,239,35,0.12) 0%, rgba(0,187,245,0.12) 100%)',
        'brand-gradient-dark': 'linear-gradient(135deg, #02c41e 0%, #009ed0 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(5,0,10,0.6) 0%, rgba(5,0,10,0.45) 40%, rgba(5,0,10,0.88) 80%, rgba(5,0,10,1) 100%)',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
