Cypress.Commands.add('getClickOnReqQuoTab', () =>{ 
    cy.get("#ui-id-2")
})

Cypress.Commands.add('breakdownCOverOnReqQuoTab',(sector)=>{
    cy.get("#quotation_breakdowncover").select(sector)
    cy.get("#quotation_windscreenrepair_t").check()
})

Cypress.Commands.add('incedent',(reason)=>{
    cy.get("#quotation_incidents").type(reason)
})

Cypress.Commands.add("registrationMileageAndCost",(num, mileage, cost)=>{
    cy.get('[placeholder="Enter vehicle registration"]').type(num)
    cy.get('[name="mileage"]').type(mileage)
    cy.get("#quotation_vehicle_attributes_value").type(cost)
})

Cypress.Commands.add("getMeassageSaveQuotataion",() =>{
    cy.get('[value="Save Quotation"]').click()
    cy.get('body > :nth-child(1)')
})

    // cy.get("#ui-id-2").click()
    
    // cy.get("#quotation_breakdowncover").select("European")
    // cy.get("#quotation_windscreenrepair_t").check()
    
    //cy.get("#quotation_incidents").type("Accident on Road")
    
    // cy.get('[placeholder="Enter vehicle registration"]').type('MH12A1234')

    // cy.get('[name="mileage"]').type('10000')
    // cy.get("#quotation_vehicle_attributes_value").type('200000')
    
    // cy.get("#quotation_vehicle_attributes_parkinglocation").select('Private property')
   
    // cy.get('[name="year"]').select('2018')
    // cy.get('[name="month"]').select('August')
    // cy.get('[name="date"]').select('15')
    // cy.get('input[value="Calculate Premium"]').click()
    // cy.get('[value="Save Quotation"]').click()
    // cy.get('body > :nth-child(1)').should('include.text', 'You have saved this quotation!')