const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('src/tailwind.config.js'),
    require('postcss-preset-env')({
      autoprefixer: {},
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
