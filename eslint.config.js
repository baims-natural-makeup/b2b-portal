module.exports = {
  extends: ['standard'],
  rules: {
    'space-before-function-paren': ['off'] // Removed due to incompatibility between Prettier and Standard (https://github.com/prettier/prettier/issues/3845)
  }
}
