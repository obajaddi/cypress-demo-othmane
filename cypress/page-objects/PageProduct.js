export default class PageProduct {
    static clickOnCustomize() {
        cy.get('#gestalt-popover-button-announce').click({ force: true });
    }

    static customizePopover(text) {
        // Police name choice
        //TODO : list all values in order to random select
        //cy.get('#0dc11a90-8984-4e67-ae83-102806704bb6-font-dropdown')
        //.should('have.length', 6)
        //.select(Math.trunc(Math.random()*6));
        // Type in Name field
        cy.get('.a-input-text.a-span12').type(text);
        // Add to basket
        cy.get('#gc-add-to-cart').click();
    }
}