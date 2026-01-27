module.exports = {
  testEnvironment: "./playwright_environment.cjs",
  testRunner: "jest-circus/runner",
  testTimeout: 30000,
  use: {
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure'
  }
};