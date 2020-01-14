module.exports = {
  rules: {
    "no-console": "off"
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
};
