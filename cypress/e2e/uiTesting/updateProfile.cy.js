/// <reference types = "Cypress"/>
describe("This test to validate Request Quotation functionality", ()=> {
    beforeEach(() =>{
        cy.visit("https://demo.guru99.com/insurance/v1/index.php")
        cy.get("#email").type("test@test")
        cy.get("#password").type("test123")
        cy.get('[name="submit"]').click()
        cy.get('[value="Log out"]').should("be.visible")
    })
    it("Update Profile",()=> {
        cy.get("#editprofile").click()
        cy.get('#user_surname').type('Abcd')
        cy.get('#user_firstname').type('Abcd')
        cy.get('#user_phone').type('2112234')
        cy.get('#user_dateofbirth_1i').select('1990')
        cy.get('#user_dateofbirth_2i').select('March')
        cy.get('#user_dateofbirth_3i').select('23')
        cy.get('#user_occupation_id').select('Student')
        cy.get('#user_address_attributes_street').type('NewStreet')
        cy.get('#user_address_attributes_county').type('NewCountry')
        cy.get('#user_address_attributes_postcode').type('PO23452')
        cy.get('[value="Update User"]').click()
    })
})