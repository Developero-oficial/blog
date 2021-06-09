/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  it("Has no detectable accessibility violations on load on main page", () => {
    cy.visit("/").get("main").injectAxe()
    cy.checkA11y()
  })

  it("Has no detectable accessibility violations on load on blog page", () => {
    cy.visit("/blog").get("main").injectAxe()
    cy.checkA11y()
  })

  it("Has no detectable accessibility violations on load on ebooks page", () => {
    cy.visit("/ebooks").get("main").injectAxe()
    cy.checkA11y()
  })

  it("Has no detectable accessibility violations on load on courses premium page", () => {
    cy.visit("/courses-premium").get("main").injectAxe()
    cy.checkA11y()
  })

  it.only("Has no detectable accessibility violations on load on about page", () => {
    cy.visit("/about").get("main").injectAxe()
    cy.checkA11y()
  })
})
