export default class Navbar {
    static clickOnLogin() {
        cy.get('#nav-link-accountList').click();
    }

    static clickOnBasket() {
        cy.get('#nav-cart-text-container').click();
    }

    static searchItem(text) {
        cy.get('#twotabsearchtextbox').type(`${text}`);
    }

    static submitSearch() {
        cy.get('#nav-search-submit-button').click();
    }

    static clickOnBasket() {
        cy.get('#nav-cart').should('be.visible').click();
    }

    static checkBasketCount(numberOfArticleInBasket) {
        cy.get('#nav-cart-count').should('contains', numberOfArticleInBasket);
    }

    static addedToBasketOk() {
        cy.get('.a-padding-none .a-icon-alert').should('be.visible');
    }

    static checkUserName(user) {
        cy.get('#nav-link-accountList-nav-line-1').invoke('text').should('contains', user);
    }
}