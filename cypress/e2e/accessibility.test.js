/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  // beforeEach(() => {
  //   cy.visit("/").get("main").injectAxe()
  // })

  it("Has no detectable accessibility violations on load on main page", () => {
    cy.visit("/").get("main").injectAxe()
    cy.checkA11y()
  })

  it("Has no detectable accessibility violations on load on blog page", () => {
    cy.visit("/blog").get("main").injectAxe()
    cy.checkA11y()
  })
})
