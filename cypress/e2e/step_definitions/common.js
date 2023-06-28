import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebTextBox from "../../helpers/webTextBox";
import WebButton from "../../helpers/webButton";
import Urls from "../../urls/Urls.json";
import commonLocators from "../../pages/commonLocators.json";
import GenericActions from "../../utilities/genericActions";
import WebXpath from "../../helpers/webXpath";
import WebText from "../../helpers/webText";

const webTextBox = new WebTextBox();
const webButton = new WebButton();
const actions = new GenericActions();
const webXpath = new WebXpath();
const webText = new WebText();

Given('user navigates to the {string} page', (url)=> {
  cy.wait(2000)
  actions.visit(Urls[url]);
})

When("user clicks on the {string} button",(element)=> {
    webButton.click(commonLocators[element])
});

When('user enters value {string} in the {string} input field', (text, element) => {
  webButton.focusClick(commonLocators[element])
  webTextBox.typeText(commonLocators[element], text)
});

Then('user can view {string}',(text) =>{
    webXpath.shouldContainTextByXpath(text)
});

Then('the corresponding page appears with the expected elements: {string}',(element)=>{
  let text = element.toString();
  let textArray = text.split(",")
  for (let count = 0; count < textArray.length; count++) {
      webXpath.shouldContainTextByXpath(textArray[count])
  }
});

When('user is on {string} page of {string}', (text,element) => {
   webText.getText(commonLocators[element])
});

Given('{string} keyword is {string}',(element,text)=>{
    webTextBox.typeText(commonLocators[element],text)
  });
  
Given('{string} is {string}', (element,text) => {
      if(element==="specialization") {
      webTextBox.typeText(commonLocators[element], text)
      webTextBox.typeText(commonLocators[element], '{downarrow}')
      webTextBox.typeText(commonLocators[element], '{enter}')
      }
      else if(element==="doctor Per Page") {
        webText.shouldBeVisible(commonLocators[element],text)
      }
  });
  
Given('{string} is clicked',(element)=>{
    webButton.click(commonLocators[element])
});
  
Then('{string} contain doctor for search {string} are displayed',(element,text)=>{
   webText.shouldBeVisible(commonLocators[element],text)
});

Given('user clicks on the {string} field',(element) => {
  webXpath.clickByXpath(element)
})

