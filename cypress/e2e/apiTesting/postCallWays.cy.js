import {apiData} from "./dataforAPI.js"
// let newData = new apiData()
/// <reference types = "Cypress"/>

describe("Ways of POST calls",() =>{

    it("First way",() =>{
        //cy.log(apiData)
        // cy.fixture('dataforAPI.js').then((data)=>{
            const reqBody = {
                //Math.random().toString(10).slice(2,8)
                tourist_name: apiData.testData,//"shekhar",// , //Math.random().toString(15).substring(8)
                tourist_email: apiData.testData + "@example.com",//Math.random().toString(15).substring(8)+"@example.com",//"c@example1.iin",// 
                tourist_location:apiData.testData//"Pune" // apiData.testData // Math.random().toString(7).substring(4)
            }
            const url = "http://restapi.adequateshop.com/api/Tourist"
        
            cy.request({
                method: `POST`,
                url: `${url}`,
                body: reqBody 
            }).then((resp)=>{
                expect(resp.status).equal(201)
                expect(resp.body.tourist_email).to.include(reqBody.tourist_email)
                //expect(resp.body.tourist_name).to.include(reqBody.tourist_name)
            })
        //})
    })
        
})