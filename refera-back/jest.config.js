/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/__tests__/**/*.spec.ts"],
  verbose: true,
};
