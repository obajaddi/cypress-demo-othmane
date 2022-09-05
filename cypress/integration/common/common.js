import { After, Before, Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import Navbar from '../../page-objects/Navbar';
import SearchResults from '../../page-objects/SearchResults';

function iVisitHomePage() {
    return cy.visit('/');
}
Given('I visit the homepage', iVisitHomePage);

function iAmLoggedInAsWord(user) {
    return cy.login(user, { cacheSession: false });
}
Given('I am logged in with {word}', iAmLoggedInAsWord);

function iCheckUserName(user) {
    return Navbar.checkUserName(user);
}
Given('I check I am logged in as {word}', iCheckUserName);


function iTypeInSearchBar(text) {
    return Navbar.searchItem(text);
}
Given('I type {string} in the searchbar', iTypeInSearchBar);

function iSubmitSearch() {
    return Navbar.submitSearch();
}
When('I submit the search', iSubmitSearch);

function iCanSeeResults() {
    return SearchResults.checkResultsAvailable();
}
Given('I can see results', iCanSeeResults);

function iClickOnTheFirstResult() {
    return SearchResults.clickOnFirstResult();
}
And('I click on the first result', iClickOnTheFirstResult);

function iCheckTheBasketCount(number) {
    return Navbar.checkBasketCount(number);
}
And('I can see the basket updated with {word} articles', iCheckTheBasketCount);
