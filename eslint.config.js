const js = {
  files: ['**/*.js'],
  extends: ['standard'],
  rules: {
    'space-before-function-paren': ['off'] // Removed due to incompatibility between Prettier and Standard (https://github.com/prettier/prettier/issues/3845)
  }
}

const ts = {
  files: ['**/*.ts'],
  extends: ['standard-with-typescript'],
  parserOptions: { project: 'tsconfig.json' },
  rules: {
    '@typescript-eslint/space-before-function-paren': ['off'] // Removed due to incompatibility between Prettier and Standard (https://github.com/prettier/prettier/issues/3845)
  }
}

module.exports = {
  overrides: [js, ts]
}
