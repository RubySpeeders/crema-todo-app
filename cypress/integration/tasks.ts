describe("App", function () {
  it("Contains a button that starts the app in motion", function () {
    cy.visit("/")
    cy.findByText("Get Started").contains("Get Started")
    cy.findByText("Get Started").click()
    cy.get(".AppHeader").contains("My Tasks")
    cy.url().should("include", "/todo")
  })
  it("Contains a header with a title", function () {
    cy.visit("/todo")
    cy.get(".AppHeader").contains("My Tasks")
  })
  it("shows a modal after clicking Create New Task button and hides it after clicking cancel", function () {
    cy.visit("/todo")
    cy.findByText("Create New Task").click()
    cy.get(".taskForm").should("exist")
    cy.get("label").should("have.text", "New Task")
    cy.findByText("Cancel").click()
    cy.get(".taskForm").should("not.exist")
  })
  it("creates a new task with a checkbox", function () {
    cy.visit("/todo")
    cy.findByText("Create New Task").click()
    cy.get("#taskInput").type("make dinner")
    cy.findByText("Save").click()
    cy.get(".checkbox > .MuiSvgIcon-root").should("exist")
  })
  it("changes an active task to completed when checkbox is clicked", function () {
    cy.visit("/todo")
    cy.findByText("Create New Task").click()
    cy.get("#taskInput").type("make dinner")
    cy.findByText("Save").click()
    cy.get("[data-testid=unchecked]").click()
    cy.get("[data-testid=checked] > path").should("exist")
  })
  it("shows an edit modal after clicking a task, edits the description, then hides the modal after clicking save", function () {
    cy.visit("/todo")
    cy.findByText("Create New Task").click()
    cy.get("#taskInput").type("make dinner")
    cy.findByText("Save").click()
    cy.get(".taskCard").click()
    cy.get("#taskInput").type("wash the dishes")
    cy.findByText("Save").click()
    cy.get(".checkboxAndDescription > .normal").should(
      "have.text",
      "wash the dishes",
    )
  })
  it("shows and hides complete tasks", function () {
    cy.visit("/todo")
    cy.findByText("Create New Task").click()
    cy.get("#taskInput").type("another task")
    cy.findByText("Save").click()
    cy.get("[data-testid=unchecked]").click({ multiple: true })
    cy.get(".taskCard").should("exist")
    cy.get(".expand").click()
    cy.get(".taskCard").should("not.exist")
  })
})
