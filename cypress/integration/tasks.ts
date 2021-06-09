describe("App", function () {
  it("Contains a button that starts the app in motion", function () {
    cy.visit("/")
    cy.get("[data-testid=getStarted]").contains("Get Started")
    cy.get("[data-testid=getStarted]").click()
    cy.get(".AppHeader").contains("My Tasks")
    cy.url().should("include", "/todo")
  })
  it("Contains a header with a title", function () {
    cy.visit("/todo")
    cy.get(".AppHeader").contains("My Tasks")
  })
  it("shows a modal after clicking Create New Task button and hides it after clicking cancel", function () {
    cy.visit("/todo")
    cy.get("[data-testid=createButton]").click()
    cy.get(".taskForm").should("exist")
    cy.get("label").should("have.text", "New Task")
    cy.get("[data-testid=cancel]").click()
    cy.get(".taskForm").should("not.exist")
  })
  it("creates a new task with a checkbox", function () {
    cy.visit("/todo")
    cy.get("[data-testid=createButton]").click()
    cy.get("#taskInput").type("make dinner")
    cy.get("[data-testid=save]").click()
    cy.get(".checkbox > .MuiSvgIcon-root").should("exist")
  })
  it("changes an active task to completed when checkbox is clicked", function () {
    cy.visit("/todo")
    cy.get("[data-testid=createButton]").click()
    cy.get("#taskInput").type("make dinner")
    cy.get("[data-testid=save]").click()
    cy.get("[data-testid=unchecked]").click()
    cy.get("[data-testid=checked] > path").should("exist")
  })
  it("shows an edit modal after clicking a task, edits the description, then hides the modal after clicking save", function () {
    cy.visit("/todo")
    cy.get("[data-testid=createButton]").click()
    cy.get("#taskInput").type("make dinner")
    cy.get("[data-testid=save]").click()
    cy.get(".taskCard").click()
    cy.get("#taskInput").type("wash the dishes")
    cy.get("[data-testid=save]").click()
    cy.get(".checkboxAndDescription > .normal").should(
      "have.text",
      "wash the dishes",
    )
  })
  it("shows and hides complete tasks", function () {
    cy.visit("/todo")
    cy.get("[data-testid=createButton]").click()
    cy.get("#taskInput").type("another task")
    cy.get("[data-testid=save]").click()
    cy.get("[data-testid=unchecked]").click({ multiple: true })
    cy.get(".taskCard").should("exist")
    cy.get(".expand").click()
    cy.get(".taskCard").should("not.exist")
  })
})
