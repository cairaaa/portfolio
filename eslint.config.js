import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import astro from "eslint-plugin-astro";

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    ignores: ["dist"]
  },
  {
    plugins: {
      "@stylistic": stylistic
    },
    files: ["**/*.ts", "**/*.js", "**/*.mjs"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/max-len": [
        "error", { 
          "code": 89, 
          "tabWidth": 2, 
          "ignoreUrls": true 
        }
      ],
      "no-empty": "off"
    }
  },
  {
    plugins: {
      astro,
      "@stylistic": stylistic
    },
    files: ["**/*.astro"],
    rules: {
      ...astro.configs.recommended.rules,

      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "no-empty": "off"
    }
  }
]);