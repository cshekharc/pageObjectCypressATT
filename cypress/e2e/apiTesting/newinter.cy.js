describe("new intercepter", () => {
    it("Dummy api interception mocking data",() => {
        cy.intercept("GET", "/data/v1/post?limit=10",{limit: 20, name:"Cshekhar"}).as('pstCheck')
        cy.visit("https://dummyapi.io/explorer")
        
    
        cy.get(':nth-child(3) > .flex > :nth-child(3)').click()
    
        cy.wait('@psttCheck').then(inter => {
            expect(inter.response.body.limit).eq(20)
        })
    })
})