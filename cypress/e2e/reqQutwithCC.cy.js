/// <reference types = "Cypress"/>
describe("This test to validate Request Quotation functionality", () => {
    beforeEach(() => {
      cy.visit("https://demo.guru99.com/insurance/v1/index.php")
      cy.login("test@test", "test123")
    })
    it('reuesting qutation',()=>{
        cy.clickOnReqTabAction()
        cy.breakdownCOverOnReqQuoTab("European")
        cy.incedent("Accident on road")
        cy.registrationMileageAndCost("Mh1212", "20000", "300000")
        cy.validateSaveQuotataionQueries()
    })
})