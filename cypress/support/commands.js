import Navbar from '../page-objects/Navbar'
import LoginPage from '../page-objects/LoginPage'

// no cach session : cy.login('user', { cacheSession: false })
Cypress.Commands.add('login', (compte, { cacheSession = true } = {}) => {  
  const login = () => {
    cy.fixture('accounts').as('comptes');
    // ----------------------------------
    cy.get('@comptes').then((comptes) => {
      Navbar.clickOnLogin();
      LoginPage.typeMail(comptes[compte]);
      LoginPage.typeContinue();
      LoginPage.typePassword(comptes['password']);
      LoginPage.clickOnSignIn();
    });    
  };
  if (cacheSession) {
    cy.session(compte, login);
  } else {
    login();
  }
});