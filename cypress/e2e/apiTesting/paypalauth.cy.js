
describe("OAuth API Automation", () => {
    let accessToken = "";
    const clientId = "please use you client id "
    const clientSecret = " please use your client secret"

    it("auth for paypal", () => {
        const authString = btoa(`${clientId}:${clientSecret}`); // Base64 encode client credentials

        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
                "Authorization": `Basic ${authString}` // Set Authorization header with base64 encoded credentials
            },
            form: true,
            body: {
                grant_type: 'client_credentials',
            },
        }).then((response) => {
            accessToken = response.body.access_token;
            //cy.log(accessToken)
            cy.request({
                method: 'GET',
                url : "https://api-m.sandbox.paypal.com/v1/invoicing/invoices",
                qs:{
                    pages:2,
                    page_size:1,
                    total_count_required:true
                },
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${accessToken}` // Set Authorization header with base64 encoded credentials
                },
                form: true,
                body: {
                    grant_type: 'client_credentials',
                },
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.total_count).to.eq(0)
            })
            // Now you can use this access token for API calls
        });
    });
});
