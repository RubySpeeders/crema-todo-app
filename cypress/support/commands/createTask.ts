import "@testing-library/cypress/add-commands"

Cypress.Commands.add("createTask", () => {
  cy.findByText("Create New Task").click()
  cy.get("#taskInput").type("make dinner")
  cy.findByText("Save").click()
})
