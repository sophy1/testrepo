module.exports = {
  //parser: "@babel/eslint-parser",
  parser: "babel-eslint",
  extends: ["plugin:prettier/recommended", "airbnb", "plugin:sonarjs/recommended"],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
    },
  },
};
