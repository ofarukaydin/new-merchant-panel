module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {},
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
