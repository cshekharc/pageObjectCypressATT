const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "https://demo.guru99.com/insurance/v1/index.php"
    // pageLoadTimeout : 15000
  },
});
