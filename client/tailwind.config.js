module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          light: '#f3f7fd',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
