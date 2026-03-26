import nextConfig from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    plugins: {
      "@next/next": nextConfig,
      react: reactPlugin,
    },
    rules: {
      ...nextConfig.configs.recommended.rules,
      ...nextConfig.configs["core-web-vitals"].rules,
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];
