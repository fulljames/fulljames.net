// eslint.config.js
export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
    },
    processor: null, // Ensures no processor is applied by default
  },
  {
    files: ["*.json", "*.jsonc", ".*rc"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          trailingComma: "none",
        },
      ],
    },
  },
];
