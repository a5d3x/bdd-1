/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const { pa11y, lighthouse, prepareAudit } = require('cypress-audit')
const cucumber = require('cypress-cucumber-preprocessor').default
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');




module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  addMatchImageSnapshotPlugin(on, config);
  on('before:browser:launch', (browser = {chrome}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse(),
    pa11y: pa11y()
  });
  
}