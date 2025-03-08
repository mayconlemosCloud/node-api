module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    fixturesFolder: false,
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 60000, // Increase default command timeout to 60 seconds
    pageLoadTimeout: 120000, // Increase page load timeout to 120 seconds
  },
};
