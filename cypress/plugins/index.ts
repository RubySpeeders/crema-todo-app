import { config } from "dotenv"
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

config()
export default (_on: Cypress.PluginEvents, config: Cypress.ConfigOptions) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.env) {
    config.env.googleRefreshToken =
      "97459474309-nv26m4tb2fgrk15uvvkup2cen066hqq9.apps.googleusercontent.com"
    config.env.googleClientId = "YvQhsB7SMrvCtccwaOJQli5Y"
    config.env.googleClientSecret =
      "1//04U9UldjyUHQ7CgYIARAAGAQSNwF-L9IrX3E0huBSMo-Ycd_zQLUY8x4rN7Y6Wt8US6BJPDYWIsxjD7qm3AKp0Q-Jgd-G1PzMlps"
  }
  return config
}
