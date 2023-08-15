const email = "#email"
const passWord = "#password"
class Login{
    getUserName(userName){
        return cy.get(email).type(userName)
    }

    getPassword(password){
        return cy.get(passWord).type(password)
    }

    clickOnSubmitButtonOfLoginPage(){
        return cy.get('[name="submit"]').click()
    }

    validateLogoutButton(){
        return cy.get('[value="Log out"]').should("be.visible")
    }
}

export default Login