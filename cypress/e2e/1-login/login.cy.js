/// <reference types="cypress" />

import { loginPage } from "../../pages/login";
describe('ServeRest - API - Login - Sucesso', () => {  

  it('Login - Sucesso', () => {
    loginPage.login("fulano@qa.com","teste")
    .then(response => {
      cy.log(response.body.authorization)
      expect(response.status).eq(200)
      expect(response.body.message).eq("Login realizado com sucesso")
    })    
  })  
})

describe('ServeRest - API - Login - Erro', () => {

  it('Login - Erro - Email em branco', () => {
    loginPage.loginError("","teste")
    .then(response => {
      cy.log(response.body)
      expect(response.status).eq(400)
      expect(response.body.email).eq("email não pode ficar em branco")
    })    
  })

  it('Login - Erro - senha em branco', () => {
    loginPage.loginError("fulano@qa.com","")
    .then(response => {
      cy.log(response.body)
      expect(response.status).eq(400)
      expect(response.body.password).eq("password não pode ficar em branco")
    })    
  })

  it('Login - Erro - senha em incorreta', () => {
    loginPage.loginError("fulano@qa.com","senhaIncorreta")
    .then(response => {
      cy.log(response.body)
      expect(response.status).eq(401)
      expect(response.body.message).eq("Email e/ou senha inválidos")
    })    
  })

  it('Login - Erro - Email em incorreto', () => {
    loginPage.loginError("fulanoErro@qa.com","Teste")
    .then(response => {
      cy.log(response.body)
      expect(response.status).eq(401)
      expect(response.body.message).eq("Email e/ou senha inválidos")
    })    
  })

})
