module.exports = {
  jest: {
    moduleNameMapper: {
      "^.+\\.(css|less)$": "<rootDir>/config/CSSStub.js",
    },
  },
  setupFiles: ["<rootDir>/browserMock.js"],
};
