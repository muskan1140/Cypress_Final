import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import commonLocators from "../../pages/commonLocators.json";
import WebText from "../../helpers//webText";


const webText = new WebText();




Given('{string} button is {string}',(text,element)=>{
   webText.shouldBeVisible(commonLocators[element],text)
});

Then('user is on {string} button',(element)=>{
webText.shouldBeVisible(commonLocators[element])
});

