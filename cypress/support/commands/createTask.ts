Cypress.Commands.add("createNewTask", () => {
  cy.findByText("Create New Task").click()
  cy.get("#taskInput").type("make dinner")
  cy.findByText("Save").click()
})
