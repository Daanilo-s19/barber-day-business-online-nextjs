module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['warn', 4],
    'react/jsx-indent': ['warn', 4, { checkAttributes: true }],
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'on',
    'no-nested-ternary': 'warn',
    'react/prop-types': 'warn',
  },
}
