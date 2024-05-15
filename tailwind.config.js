const config = {
  content: ['./src/**/*.{html,js,tsx}'],
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './dist/popup.html'],
  theme: {
    extend: {},
  },
};

module.exports = config;
