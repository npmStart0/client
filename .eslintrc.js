module.exports = {
    parserOptions: {
      sourceType: 'module',
    },
    rules: {
      'curly': ['error', 'all'],
      'max-len': ['error', { 'code': 130 }],
      'arrow-parens': ['error', 'always'],
      'indent': ['error', 4], 
      'no-console': 'warn', 
      'no-unused-vars': 'error', 
      'semi': ['error', 'always'], 
      'quotes': ['error', 'single'],
    },
    env: {
      browser: true
    }
};