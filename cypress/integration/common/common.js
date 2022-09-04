/** @module Common **/

import { After, Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Navbar from '../../page-objects/Navbar'

function iVisitHomePage() {
    return cy.visit('/');
}
Given('I visit the homepage', iVisitHomePage);

function iAmLoggedInAsWord(user) {
    return cy.login(user, { cacheSession: false });
}
Given('I am logged in with {word}', iAmLoggedInAsWord);

function iCheckUserName(user) {
    Navbar.checkUserName(user);
}
Given('I check I am logged in as {word}', iCheckUserName);


function iTypeInSearchBar(text) {
    Navbar.searchItem(text);
}
Given('I type {string} in the searchbar', iTypeInSearchBar);




