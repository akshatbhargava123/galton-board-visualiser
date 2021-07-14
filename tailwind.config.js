module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
