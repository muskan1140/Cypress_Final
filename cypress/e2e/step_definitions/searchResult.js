import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebTextBox from "../../helpers/webTextBox";
import commonLocators from "../../pages/commonLocators.json"


const webtextBox = new WebTextBox();


Given('{string} keyword is {string}',(element,text)=>{
  webtextBox.typeText(commonLocators[element],text)
});

Given('{string} is {string}', (element,text) => {
    if(text==="Cosmetology") {
    webtextBox.typeText(commonLocators[element], text)
    webtextBox.typeText(commonLocators[element], '{downarrow}')
    webtextBox.typeText(commonLocators[element], '{enter}')
    }
});