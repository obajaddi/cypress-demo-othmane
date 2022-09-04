export default class SearchResults {
    static checkResultsAvailable() {
        cy.get('.a-size-medium-plus.a-text-normal').should('be.visible');
    }

    static clickOnFirstResult() {
        cy.get("[data-csa-c-pos='1'] .a-price-whole").click();
    }
}