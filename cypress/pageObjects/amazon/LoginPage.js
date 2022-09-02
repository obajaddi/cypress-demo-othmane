export default class LoginPage{
    static clickOnAmazonIcon() {
        //TODO
    }

    //--- 1st secion ---//
    static typeMail(mail) {
        cy.get('#ap_email').clear().type(mail);
    }

    static typeContinue(mail) {
        cy.get('#continue').click();
    }

    // In case of error message after login with wrong credentials
    static displayedErrorMessage(username, password) {
        //TODO
    }

    static clickOnCreateAccount() {
        //TODO
    }

    static clickOnNeedHelp() {
        //TODO
    }

    //--- 2nd part ---//
    static typePassword(password) {
        cy.get('#ap_password').clear().type(password);
    }
    
    static clickOnSignIn() {
        cy.get('#signInSubmit').click();
    }
    
    static clickOnPasswordLost() {
        cy.get('#auth-fpp-link-bottom').click();
    }

    static clickOnRememberMe() {
        //TODO
    }
    // -----------------------------

    // In case a phone number is asked
    static clickOnNotNow() {
        cy.get('#ap-account-fixup-phone-skip-link').click();
    } 
    
    static checkSignedIn(lastName) {
        cy.get('#nav-link-accountList-nav-line-1').should('contains', lastName);
    } 
    
} 