/// <reference types="Cypress" />

describe("main blog page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show header title", () => {
    cy.findByRole("heading", { name: /developero/i }).should("be.visible")
  })

  it("should show navbar menu items", () => {
    cy.findByRole("navigation").should("be.visible")
    cy.findByRole("link", { name: "TDD" }).should("be.visible")
    cy.findByRole("link", { name: /blog/i }).should("be.visible")
    cy.findByRole("link", { name: /ebooks/i }).should("be.visible")
    cy.findByRole("link", { name: /cursos premium/i }).should("be.visible")
  })

  it("should navigate to blog page", () => {
    cy.findByRole("link", { name: /blog/i }).click()
    cy.findByRole("heading", { name: /blog/i }).should("be.visible")
  })

  it("should navigate to ebooks page", () => {
    cy.findByRole("link", { name: /ebooks/i }).click()
    cy.findByRole("heading", { name: /ebooks de developero/i }).should(
      "be.visible"
    )
  })

  it("should navigate to courses premium page", () => {
    cy.findByRole("link", { name: /cursos premium/i }).click()
    cy.findByRole("heading", { name: /cursos premium de developero/i }).should(
      "be.visible"
    )
  })

  it("should navigate to test driven development", () => {
    cy.findByRole("link", { name: "TDD" }).click()
    cy.findByRole("heading", {
      name:
        "¿Qué es Test Driven Development o Desarrollo dirigido por pruebas?",
    }).should("be.visible")
  })
})
