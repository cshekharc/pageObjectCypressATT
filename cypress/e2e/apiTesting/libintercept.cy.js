describe("interceptions",() => {
    it("json place holder",() => {
        cy.visit("https://jsonplaceholder.typicode.com/guide") // recently this endpoint is not working

        cy.intercept({
            path: "/posts",

        }).as("checkPosts")

        cy.get('[href="/users/1/posts"]').click()
        cy.wait("@checkPosts").then((res)=>{
            cy.log(JSON.stringify(res))
        })
    })
})

// describe("use of intercepts", () => {
//     it("mocking data", () => {
//         cy.intercept({
//             method: "GET",
//             url: "/library/GetBook.php?AuthourName=shetty",
//         },
//         {
//             statusCode: 200,
//             body: [{
//                 "book_name": "RestAssured with Java",
//                 "isbn": "RSU",
//                 "aisle": "2301"
//             }],
//         }
//         ).as("updatedBookLib");

//         cy.visit("https://rahulshettyacademy.com/angularAppdemo");

//         cy.get('[data-target="#exampleModal"]').click();
//         cy.wait("@updatedBookLib").then(()=>{
//             cy.get('tr').should("have.length", response.body.length + 1);
//         })

// //         cy.wait("@updatedBookLib").should((response) => {
// //             cy.get('tr').should("have.length", response.body.length + 1);
// //         });
        
// //         cy.get('p').should('include.text', 'Sorry we have only one book available');
//     });
// });
