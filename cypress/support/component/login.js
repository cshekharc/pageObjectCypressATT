Cypress.Commands.add('login', (userName, password) =>{ 
    cy.get("#email").type(userName)
    cy.get("#password").type(password)
    cy.get('[name="submit"]').click()
    cy.get('[value="Log out"]').should("be.visible")
})