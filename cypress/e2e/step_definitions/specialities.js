import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import commonLocators from "../../pages/commonLocators.json";
import WebText from "../../helpers//webText";

Given('{string} button is {string}',(text,elementIdentifier)=>{
   const webText = new WebText();
   webText.shouldBeVisible(commonLocators[elementIdentifier],text)
});

Then('user is on {string} button',(elementIdentifier)=>{
   const webText = new WebText();
   webText.shouldBeVisible(commonLocators[elementIdentifier])
});

