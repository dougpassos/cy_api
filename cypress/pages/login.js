class LoginPage {

    login(email, pass){
        return cy.request({
            method: 'POST',
            url: `/login`,
            body: {
                email: email,
                password: pass                
            },      
        })
    }

    loginError(email, pass){
        return cy.request({
            method: 'POST',
            url: `/login`,
            failOnStatusCode: false,
            body: {
                email: email,
                password: pass                
            },      
        })
    }
}

export const loginPage = new LoginPage()
