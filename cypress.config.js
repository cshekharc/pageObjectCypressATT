const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "https://demo.guru99.com/insurance/v1/index.php"
    // pageLoadTimeout : 15000
    experimentalRunAllSpecs: true,
    experimentalStudio : true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
    retries: {
      runMode: 1,
      openMode: 2,
    },
  },
  
});
