import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import commonLocators from "../../pages/commonLocators.json";
import WebText from "../../helpers//webText";
import WebButton from "../../helpers/webButton";


const webText = new WebText();
const webButton = new WebButton();



Given('{string} button is {string}',(text,element)=>{
   webText.shouldBeVisible(commonLocators[element],text)
});

Then('user is on {string} button',(element)=>{
webText.shouldBeVisible(commonLocators[element])
});

