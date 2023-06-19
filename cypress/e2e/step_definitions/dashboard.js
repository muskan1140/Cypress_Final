import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebButton from "../../helpers/webButton.js";
import WebText from "../../helpers/webText.js";
import commonLocators from "../../pages/commonLocators.json"

const webbutton = new WebButton();
const webtext = new WebText();


Given('user can view list of {string}',(element)=>{
    webtext.shouldBeVisible(commonLocators[element])
});

When('user clicks on {string} page of {string}', (text,element) => {
    webbutton.click(commonLocators[element],text)
});