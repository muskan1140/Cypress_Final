import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login';
import DashBoardPage from "../../pageObject/dashboard";

const loginPage = new LoginPage();
const dashboard = new DashBoardPage();

Given("I am on the login page", () => {
    loginPage.visit()
});


When("I click on the {string} button", (label) => {
    loginPage.clickButtonByVisibleText(label)
});

Then("I should see {string} message on the page", (text) => {
    loginPage.checkMessageVisibility(text)
});


Given("I login to the dashboard with {string} credentials",(user) => {
    loginPage.iloginWithAdminCredentials(user)
});