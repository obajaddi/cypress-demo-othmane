export default class Basket {
    static checkProductInBasket(productName) {
        cy.get('#sc-active-cart').should('contain', productName);
    }
}