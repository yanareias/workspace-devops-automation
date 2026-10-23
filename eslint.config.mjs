import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "coverage/**", "public/**"]
  },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];