module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "eslint-config-prettier",
  ],
  plugins: ["jsx-a11y", "prettier"],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
  },
}
