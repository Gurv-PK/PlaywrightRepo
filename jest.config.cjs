module.exports = {
  testEnvironment: "./playwright_environment.cjs",
  testRunner: "jest-circus/runner",
  testTimeout: 30000,
  launchOptions: {
    headless: process.env.HEADLESS !== 'false' 
  }
};