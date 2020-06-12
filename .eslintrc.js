module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
      commonjs: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'prettier/prettier': 'warn',
      'no-console': ['error'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/destructuring-assignment': 0,
      'react/forbid-prop-types': 0,
      'react/state-in-constructor': 0,
      'react/jsx-props-no-spreading': 0,
      'newline-before-return': 'error',
      'import/newline-after-import': 0,
      'no-use-before-define': 0,
      'max-len': ['error', { code: 140 }],
      'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
      'react/prop-types': 0,
      'react/jsx-curly-newline': 0,
      'react/static-property-placement': 0,
      'react/no-unescaped-entities': 0,
      'import/newline-after-import': ['error', { count: 1 }],
    },
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src/'],
        },
      },
    },
  };
  