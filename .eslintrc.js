module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "react-app",
    "plugin:prettier/recommended",
    "next",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "components/", "pages/"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "prettier/prettier": ["error", {endOfLine: "auto"}],
    "import/no-extraneous-dependencies": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "no-param-reassign": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "import/order": 0,
    "import/extensions": "off",
    "no-console": 0,
    "no-shadow": 0,
    "import/no-dynamic-require": 0,
    "@typescript-eslint/naming-convention": 0,
    "@typescript-eslint/no-var-requires": 0,
    "import/no-cycle": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        vars: "all",
        args: "none",
      },
    ],
  },
};
