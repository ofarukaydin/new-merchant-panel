module.exports = {
    plugins: [
      require("tailwindcss"),
      require("postcss-preset-env")({
        autoprefixer: {
        },
        stage: 3,
        features: {
          "nesting-rules": true
        }
      })
    ]
  };
  