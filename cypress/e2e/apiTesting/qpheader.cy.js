/// <reference types="Cypress"/>

describe("queries headers and token",() => {
    let token
    let customerName = Math.random().toString(15).substring(5)
    // before("get access token",()=>{
   it("get access token",()=>{
        cy.request({
            method : "POST",
            url : "https://simple-books-api.glitch.me/api-clients/",
            headers : {
                "Content-Type": "application/json"
            },
            body:{
                clientName: Math.random().toString(15).substring(5),
                clientEmail: Math.random().toString(15).substring(5)+"@example.com"
            }
        }).then((resp)=>{
            const mime = resp.headers['content-type']
            expect(mime).contains("application/json")
            // expect(resp.headers).to.include("Content-Type")
            expect(resp.status).eq(201)
            token = resp.body.accessToken
            cy.request({
                method: "POST",
                url: "https://simple-books-api.glitch.me/orders",
                headers: {
                    "Content-Type": "application/json",
                    "authorization" : "Bearer "+ token
                },
                body:{
                    "bookId": 1,
                    "customerName": customerName
                }
            }).then((resp)=>{
                let bookOrderId= resp.body.orderId
                // let getCustomerName = resp.body.customerName
                // cy.log(getCustomerName)
                expect(resp.status).eq(201)
                expect(resp.body.created).to.eq(true)
                cy.request({
                    method:"GET",
                    url:`https://simple-books-api.glitch.me/orders/${bookOrderId}`,
                    headers: {
                        "Content-Type": "application/json",
                        "authorization" : "Bearer "+ token
                    },
                }).then((resposonse)=>{
                    expect(resposonse.body.customerName).contains(customerName)
                })
            })
        })
    })
})