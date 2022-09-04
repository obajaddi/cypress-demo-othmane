/** @module Add-customizable-gift **/

import { After, Before, Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import PageProduct from '../../page-objects/PageProduct';


function iClickOnCustomizeButton() {
    return PageProduct.clickOnCustomize();
}
And('I click on the customize button', iClickOnCustomizeButton);

function iCustomizeTheGift() {
    return PageProduct.customizePopover('PirouetteCacahuète');
}
And('I customize the gift', iCustomizeTheGift);