/// <reference types = "Cypress"/>
const url = "https://jsonplaceholder.typicode.com"
describe("All http calls exection",()=>{
    it("Http GET call",()=>{
        cy.request('GET', `${url}/posts/1`).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.id).eq(1)
            expect(response.body.title).contains("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            cy.log(response)
        })
    })
    it("Http POST call",()=>{
        cy.request({
            method : "POST",
            url: `${url}/posts`,
            body:{
                userId : 2,
                title: "This is for testing purpose"
            }
        }).then((response)=>{
            cy.log(response.body)
            expect(response.status).eq(201)
            expect(response.body.title).contains("This is for testing purpose")
            //expect(response.body.id).eq(2)
           
        })
    })
        it("PUT call",() =>{
        cy.request({
            method: `PUT`,
            url : `${url}/posts/1`,
            body:{
                title: "updated post",
                body: "updated body", 
                userId: 2,
                id: 1
            }
        }).then((respo)=>{
            expect(respo.status).equal(200)
            expect(respo.body.id).eq(1)
            expect(respo.body.body).contains("updated body")
            cy.log(respo)
        })
    })

    it("DELETE call",() =>{
        cy.request({
            method: `DELETE`,
            url : `${url}/posts/1`,
        }).then((respo)=>{
            expect(respo.status).equal(200)
            
        })
    })
})

// describe("Different Http request",()=>{
//     it("GET call",()=>{
//         cy.request(`GET`, `${url}/posts/1`)
//             .then((result)=>{
//                 expect(result.status).equal(200);
//                 cy.log(result.body)
//             })
//     })

//     it("Post call", () =>{
//         cy.request({
//             method: `POST`, 
//             url : `${url}/posts/`,
//             body:{
//                 title: `New Test post`,
//                 body : `this is for testing`,
//                 userId : 2 
//             }
//         }).then((resp)=>{
//             expect(resp.status).equal(201)
//             expect(resp.body.title).to.include("New Test post");
//         })
//     })

//     it("PUT call",() =>{
//         cy.request({
//             methos: `PUT`,
//             url : `${url}/posts/1`,
//             body:{
//                 title: `updated post`,
//                 body: `updated body`, 
//                 userId: 2,
//                 id: 1
//             }
//         }).then((respo)=>{
//             expect(respo.status).equal(200)
//             expect(respo.body.id).eq(1)
//         })
//     })

//     it("DELETE call",() =>{
//         cy.request({
//             methos: `DELETE`,
//             url : `${url}/posts/1`,
//         }).then((respo)=>{
//             expect(respo.status).equal(200)
//         })
//     })
// })