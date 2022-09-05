import { After, Before, Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import PageProduct from '../../page-objects/PageProduct';
import SearchResults from '../../page-objects/SearchResults';

function iClickOnChosenGift(gift) {
    return SearchResults.clickOnChosenGift(gift);
}
And('I click on {string} gift', iClickOnChosenGift);

function iClickOnCustomizeButton() {
    return PageProduct.clickOnCustomize();
}
And('I click on the customize button', iClickOnCustomizeButton);

function iChooseArandomPolice() {
    return PageProduct.customChoosePolice();
}
Then('I choose a random police', iChooseArandomPolice);

function iTypeInCustomTextField(text) {
    return PageProduct.typeInCustomTextField(text);
}
Then('I type {string} in the custom text field', iTypeInCustomTextField);

function iAddTheCustomizedGiftInBasket() {
    return PageProduct.addGiftCutomizedInBasket();
}
Then('I add the gift to the basket', iAddTheCustomizedGiftInBasket);

