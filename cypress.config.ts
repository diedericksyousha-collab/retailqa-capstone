import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    screenshotsFolder: "reports/screenshots",
    videosFolder: "reports/cypress/videos",
    video: true,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1,
      openMode: 0
    },
    env: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:5000"
    }
  }
});
