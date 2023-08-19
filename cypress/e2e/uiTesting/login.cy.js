import Login from "../../pageObjects/test/loginPage"

const login = new Login()
/// <reference types = "Cypress"/>

describe("This test to validate login function", () => {
  //before
  //beforeEach
  //after
  //afterEach
  //hooks
  beforeEach(() => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php")
  })
  it("smoke test for login functionality", () => {

    // cy.get("#email").type("test@test")
    login.getUserName(Cypress.env("userNamefromenv"))
    // cy.get("#password").type("test123")
    login.getPassword(Cypress.env("passWordfromenv"))
    // cy.get('[name="submit"]').click()
    login.clickOnSubmitButtonOfLoginPage()
    // cy.get('[value="Log out"]').should("be.visible")
    login.validateLogoutButton()
  })
  it("smoke test for login functionality", () => {

    // cy.get("#email").type("test@test")
    login.getUserName(Cypress.env("userNamefromenv"))
    // cy.get("#password").type("test123")
    login.getPassword(Cypress.env("passWordfromenv"))
    // cy.get('[name="submit"]').click()
    login.clickOnSubmitButtonOfLoginPage()
    // cy.get('[value="Log out"]').should("be.visible")
    login.validateLogoutButton()
  })
  it.skip("smoke test for login functionality", () => {

    // cy.get("#email").type("test@test")
    login.getUserName(Cypress.env("userNamefromenv"))
    // cy.get("#password").type("test123")
    login.getPassword(Cypress.env("passWordfromenv"))
    // cy.get('[name="submit"]').click()
    login.clickOnSubmitButtonOfLoginPage()
    // cy.get('[value="Log out"]').should("be.visible")
    login.validateLogoutButton()
  })
  it.skip("smoke test for login functionality", () => {

    // cy.get("#email").type("test@test")
    login.getUserName(Cypress.env("userNamefromenv"))
    // cy.get("#password").type("test123")
    login.getPassword(Cypress.env("passWordfromenv"))
    // cy.get('[name="submit"]').click()
    login.clickOnSubmitButtonOfLoginPage()
    // cy.get('[value="Log out"]').should("be.visible")
    login.validateLogoutButton()
  })
})