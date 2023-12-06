/// <reference types = "Cypress"/>

describe("interceptions",() => {
    it("Dummy api interception for stubbing data",() => {
        cy.intercept({
            path: "/data/v1/post/60d21af267d0d8992e610b8d/*",

        }).as('commnetCheck')
        cy.visit("https://dummyapi.io/explorer")

        // cy.get('.flex > :nth-child(5)').as("clickoncomment")//.click()
        // cy.get("@clickoncomment").click()
        // cy.wait('@clickoncomment')
        cy.wait('@commnetCheck').then(inter => {
            expect(inter.response.body.limit).eq(10)
        })
    })

    it("Dummy api interception mocking data",() => {
        cy.intercept("GET", "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",{limit: 20, name:"shekhar"}).as('commnetCheck')
        cy.visit("https://dummyapi.io/explorer")
        
        cy.intercept()

        cy.get('.flex > :nth-child(5)').click()

        cy.wait('@commnetCheck').then(inter => {
            expect(inter.response.body.limit).eq(10)
        })
    })

    // it("Dummy api interception for stubbing data",() => {
    //     cy.intercept({
    //         path: "/data/v1/*",

    //     }).as('postCheck')
    //     cy.visit("https://dummyapi.io/explorer")
        
    //     cy.get(':nth-child(3) > .flex > :nth-child(3)').click()

    //     cy.wait('@postCheck').then(inter => {
    //         expect(inter.response.body.limit).eq(10)
    //     })
    // })
    
})



