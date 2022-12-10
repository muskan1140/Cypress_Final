import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login'

const loginPage = new LoginPage();

Given("I am on the login page", () => {
    loginPage.visit()
});


When("I click on the {string} button", (label) => {
    loginPage.clickButton(label)
});

Then("I should see {string} message on the page", (text) => {
    loginPage.checkMessageVisibility(text)
});