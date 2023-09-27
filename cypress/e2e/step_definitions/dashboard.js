import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebButton from "../../helpers/webButton.js";
import WebText from "../../helpers/webText.js";
import commonLocators from "../../pages/commonLocators.json"

Given('user can view list of {string}',(elementIdentifier)=>{
    const webText = new WebText();
    webText.shouldBeVisible(commonLocators[elementIdentifier])
});

When('user clicks on {string} page of {string}', (text,elementIdentifier) => {
    const webButton = new WebButton();
    webButton.click(commonLocators[elementIdentifier],text)
});
