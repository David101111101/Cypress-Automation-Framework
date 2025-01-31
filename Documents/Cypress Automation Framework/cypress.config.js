const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.testim.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // plugin to print in the terminal console log 
      on('task',{
        log(message){
         console.log('Error: ' + message)
         return null
        } 
     })
    },
    excludeSpecPattern: [
      "cypress/e2e/1-getting-started/",
      "cypress/e2e/2-advanced-examples/"
      ]
  },
});
