module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'curly': ['error', 'all'],
    'max-len': ['error', { 'code': 130 }],
    'arrow-parens': ['error', 'always'],
    'indent': ['error', 4]
  },
  env: {
    browser: true
  }
};
