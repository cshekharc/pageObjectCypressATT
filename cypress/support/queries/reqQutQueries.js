Cypress.Commands.add("validateSaveQuotataionQueries",()=>{
    cy.getMeassageSaveQuotataion().should('include.text', 'quotation')
})