import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: ["xstate"],
    rules: {
      "xstate/no-infinite-loop": "error",
      "xstate/no-imperative-action": "error",
      "xstate/no-ondone-outside-compound-state": "error",
      "xstate/invoke-usage": "error",
      "xstate/entry-exit-action": "error",
      "xstate/prefer-always": "error",
      "xstate/prefer-predictable-action-arguments": "error",
      "xstate/no-misplaced-on-transition": "error",
      "xstate/no-invalid-transition-props": "error",
      "xstate/no-invalid-conditional-action": "error",
      "xstate/no-async-guard": "error",
      "xstate/event-names": ["warn", "macroCase"],
      "xstate/state-names": ["warn", "camelCase"],
      "xstate/no-auto-forward": "warn"
    }
  }
];

export default eslintConfig;
