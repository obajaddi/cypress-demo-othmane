export default class BasePage {
    static logInfo(message) {
        cy.log(message);
    }

    static setViewport(size){
        cy.viewport(size);
    } 
}