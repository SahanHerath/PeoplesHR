module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include paths to all your files
    './public/**/*.html', // If you have HTML files in public
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out'
      },
      colors: {
        'g': '#0b1b35'
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  }
}
