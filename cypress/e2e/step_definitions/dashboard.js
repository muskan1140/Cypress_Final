import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebButton from "../../helpers/webButton.js";
import WebText from "../../helpers/webText.js";
import commonLocators from "../../pages/commonLocators.json"

const webButton = new WebButton();
const webText = new WebText();


Given('user can view list of {string}',(element)=>{
    webText.shouldBeVisible(commonLocators[element])
});

When('user clicks on {string} page of {string}', (text,element) => {
    webButton.click(commonLocators[element],text)
});