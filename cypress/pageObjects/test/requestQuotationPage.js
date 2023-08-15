class RequestQutotation{

    clickOnRequestQutotation(){
        return cy.get("#ui-id-2").click()
    }
    breakdownCover(selectValue){
        cy.get("#quotation_breakdowncover").select(selectValue)
        cy.get("#quotation_windscreenrepair_t").check()
    }
    
    incedent(incedentReason){
        return cy.get("#quotation_incidents").type(incedentReason)
    }

    registation(VehicalNumber){
        return cy.get('[placeholder="Enter vehicle registration"]').type(VehicalNumber)
    }
    mileageandCost(mileage, cost){
        cy.get('[name="mileage"]').type(mileage)
        cy.get("#quotation_vehicle_attributes_value").type(cost)
    }
    parking(selectOption){
        cy.get("#quotation_vehicle_attributes_parkinglocation").select(selectOption)
    }
    vehicalPurchaseDate(year, month, date){
        cy.get('[name="year"]').select(year)
        cy.get('[name="month"]').select(month)
        cy.get('[name="date"]').select(date)
    }
    saveQutotation(){
        cy.get('[value="Save Quotation"]').click()
    }
    validateQutationSucess(){
        cy.get('body > :nth-child(1)').should('include.text', 'You have saved this quotation!')
    }
}

export default RequestQutotation