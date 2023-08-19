describe("queries headers and token",() => {
    let token
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
            expect(resp.status).eq(201);
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
                    "customerName": "Marathi Books"
                }
            }).then((resp)=>{
                let bookOrderId= resp.body.orderId;
                expect(resp.status).eq(201)
                expect(resp.body.created).to.eq(true)
                cy.request({
                    method:"GET",
                    url:`https://simple-books-api.glitch.me/orders/${bookOrderId}`,
                    headers: {
                        "Content-Type": "application/json",
                        "authorization" : "Bearer "+ token
                    },
                })
            })
        })
    })
})