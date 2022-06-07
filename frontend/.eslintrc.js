module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react", "@typescript-eslint", "prettier", "eslint-plugin-tsdoc"],
  rules: {
    "prettier/prettier": "error",
    "tsdoc/syntax": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  }
};
