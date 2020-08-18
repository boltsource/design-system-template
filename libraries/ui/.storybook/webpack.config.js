const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "@xproduct/ui": path.resolve(__dirname, "../src/index.ts"),
    },
  },
};
