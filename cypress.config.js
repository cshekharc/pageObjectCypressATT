const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: false,
    showPassed : true,
    code: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://demo.guru99.com/insurance/v1/index.php",
    // pageLoadTimeout : 15000
    experimentalRunAllSpecs: true,
    experimentalStudio : true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
    retries: {
      runMode: 1,
      openMode: 2,
    },
    env:{
      userNamefromenv: "test@test",
      passWordfromenv : "test123",
    }
  },
  
});
