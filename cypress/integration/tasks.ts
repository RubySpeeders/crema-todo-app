describe("App", function () {
  it("Contains a link to learn about React", function () {
    cy.visit("/")
    cy.get(".AppHeader").contains("My Tasks")
    cy.get("#taskInput").type("make dinner")
    cy.get("#saveButton").click()
    cy.get('[type="checkbox"]').should("exist")
    cy.get(".createTaskButton").click()
    cy.get(".newTaskForm").should("exist")
    cy.get("#cancelButton").click()
    cy.get(".newTaskForm").should("not.exist")
  })
})
