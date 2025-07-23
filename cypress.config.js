/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000', // Substituir para URL do seu teste
        viewportHeight: 1080,
        viewportWidth: 1920,
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
});
