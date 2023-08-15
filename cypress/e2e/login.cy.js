import Login from "../pageObjects/test/loginPage"

const login = new Login()
/// <reference types = "Cypress"/>

describe("This test to validate login function", ()=> {
    beforeEach(() =>{
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
    })
  it("smoke test for login functionality",()=> {

    // cy.get("#email").type("test@test")
    login.getUserName("test@test")
    // cy.get("#password").type("test123")
    login.getPassword("test123")
    // cy.get('[name="submit"]').click()
    login.clickOnSubmitButtonOfLoginPage()
    // cy.get('[value="Log out"]').should("be.visible")
    login.validateLogoutButton()
  })
})