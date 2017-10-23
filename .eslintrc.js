// @flow
module.exports = {
  env: {
    browser: true,
    es6: true,
    meteor: true,
    node: true,
    "shared-node-browser": true,
  },
  extends: ["airbnb-base", "plugin:meteor/recommended", "prettier"],
  parser: "babel-eslint",
  plugins: [
    "meteor",
    "no-use-extend-native",
    "prefer-object-spread",
    "prettier",
  ],
  rules: {
    "import/extensions": ["error", "never"],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^meteor/"],
      },
    ],
    "max-params": ["warn", 1],
    "no-param-reassign": [
      "warn",
      {
        props: true,
      },
    ],
    "no-use-extend-native/no-use-extend-native": "error",
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "prefer-object-spread/prefer-object-spread": "error",
    "sort-keys": "warn",
    "sort-vars": "warn",
  },
};
