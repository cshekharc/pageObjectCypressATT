// import Login from '../pageObjects/test/loginPage'
import RequestQutotation from "../pageObjects/test/requestQuotationPage"

const requestQutotation = new RequestQutotation()
// const login = new Login()
/// <reference types = "Cypress"/>
describe("This test to validate Request Quotation functionality", () => {
  beforeEach(() => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php")
    // login.getUserName("test@test")
    // login.getPassword("test123")
    // login.clickOnSubmitButtonOfLoginPage()
    // login.validateLogoutButton()
    cy.login("test@test", "test123")
  })
  it("Request Qutotation smoke test for login functionality", () => {
    requestQutotation.clickOnRequestQutotation()
    // cy.get("#ui-id-2").click()
    requestQutotation.breakdownCover("European")
    // cy.get("#quotation_breakdowncover").select("European")
    // cy.get("#quotation_windscreenrepair_t").check()
    requestQutotation.incedent("Accident on Road")
    //cy.get("#quotation_incidents").type("Accident on Road")
    requestQutotation.registation("MH12A1234")
    // cy.get('[placeholder="Enter vehicle registration"]').type('MH12A1234')
    requestQutotation.mileageandCost('10000', '200000')
    // cy.get('[name="mileage"]').type('10000')
    // cy.get("#quotation_vehicle_attributes_value").type('200000')
    requestQutotation.parking('Private property')
    // cy.get("#quotation_vehicle_attributes_parkinglocation").select('Private property')
    requestQutotation.vehicalPurchaseDate('2018', 'August', '15' )
    // cy.get('[name="year"]').select('2018')
    // cy.get('[name="month"]').select('August')
    // cy.get('[name="date"]').select('15')
    // cy.get('input[value="Calculate Premium"]').click()
    requestQutotation.saveQutotation()
    // cy.get('[value="Save Quotation"]').click()
    requestQutotation.validateQutationSucess()
    // cy.get('body > :nth-child(1)').should('include.text', 'You have saved this quotation!')
  })
  it("retrive qutation",()=>{
    cy.get("#retrieve").click()
  })

})