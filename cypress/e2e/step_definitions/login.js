import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login.js'


const login = new LoginPage();


When("I should see {string} heading on the page", (heading) => {
  login.checkVisibilityOfHeading(heading);
});

Then("I should see {string} subheading on the page", (subheading) => {
  login.checkVisibilityOfSubHeading(subheading)
});

When("I fill {string} email on the email input field", (email) => {
  login.typeEmailOnEmailInputField(email)
});

When("I fill {string} password on the password input field", (password) => {
  login.typePasswordOnPasswordInputField(password)
});


When("I check the remember me checkbox", () => {
  login.checkRememberMeCheckbox()
});

Then("I should navigate to the {string} dashboard page", (text) => {
  login.checkUrlContainsText(text)
});