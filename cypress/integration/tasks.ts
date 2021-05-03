describe("App", function () {
  it("Contains a link to learn about React", function () {
    cy.visit("/")
    cy.get(".AppHeader").contains("My Tasks")
    //need to learn about how to add a task and then check for this
    // cy.get('[type="checkbox"]').should("exist")
  })
})
