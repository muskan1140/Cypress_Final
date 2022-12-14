import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login';
import DashBoardPage from "../../pageObject/dashboard";
import CommonFile from "../../pageObject/commonFile";
import Decryption from "../../utilities/decryption";

const loginPage = new LoginPage();
const dashboard = new DashBoardPage();
const commonFile = new CommonFile();
const decode = new Decryption();

Given("I am on the login page", () => {
    loginPage.visit()
});


When("I click on the {string} button", (label) => {
    loginPage.clickButtonByVisibleText(label)
});

Then("I should see {string} message on the page", (text) => {
    loginPage.checkMessageVisibility(text)
});


// Given("I login to the dashboard with {string} credentials",(user) => {
//     loginPage.iloginWithAdminCredentials(user)
// });

When("I fill {string} on the {string} input field",function(string1,string2){
    let decodedText = decode.getDecodedString(string1);
    commonFile.iEnterValue(string2,decodedText)
});


When("I check the {string} checkbox",function(string){
    commonFile.iCheckedCheckBox(string)
});

Then("I should navigate to the {string} dashboard page", (text) => {
    login.checkUrlContainsText(text)
});

Then("I should see {string} heading on the page", (text) => {
    loginPage.checkMessageVisibility(text)
});