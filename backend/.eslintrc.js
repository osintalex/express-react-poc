module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "eslint-plugin-tsdoc"],
  extends: ["airbnb-base", "airbnb-typescript/base", "plugin:prettier/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
    "tsdoc/syntax": "error",
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external', 
          'internal',
          ['sibling', 'parent'],
          'index', 
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  }
};
