module.exports = {
  extends: ['plugin:react/recommended'],
  env: {
    "browser": true,
    "worker": true,
  },
  plugins: [
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  }
}