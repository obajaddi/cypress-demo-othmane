// no cach session : cy.login('user', { cacheSession: false })
Cypress.Commands.add('login', (compte, { cacheSession = true } = {}) => {
    const login = () => {
      cy.visit('/');
      cy.get('.alltricks-Header-userTrigger').click({ force: true });
      cy.get('@comptes').then((comptes) => {
        cy.get('#email').type(comptes[compte]);
        cy.get('[data-cy="submit-login"]').click();
        cy.get('#password').type(comptes['password']);
        cy.get('[data-cy="submit-connection"]').click();
        cy.get("p[data-is-connected='true']");
      });
    };
    if (cacheSession) {
      cy.session(compte, login);
    } else {
      login();
    }
  });