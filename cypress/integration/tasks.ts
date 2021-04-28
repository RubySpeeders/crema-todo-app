describe("App", function () {
  it("Contains a link to learn about React", function () {
    cy.visit("/")
    cy.get(".App-header").contains("My Tasks")
    cy.get('[type="checkbox"]').should("exist")
    // cy.findByTestId("kittykat")
  })
})
