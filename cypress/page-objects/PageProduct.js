export default class PageProduct {
    static clickOnCustomize() {
        cy.get('#gestalt-popover-button-announce').click({ force: true });
    }

    // Cutomize article
    static customChoosePolice(text) {
        //TODO : 
        // 1) check the select lenght, should have 6 polices
        // 2) choose a random police 
        //cy.get("span[class='a-dropdown-container'] > select")
        //.select(Math.trunc(Math.random()*6));
    }

    static typeInCustomTextField(text) {
        cy.wait(2000);
        cy.get('.a-input-text.a-span12').type(text);
    }

    static addGiftCutomizedInBasket() {
        cy.get('#gc-add-to-cart').click({ force: true });
    }
}