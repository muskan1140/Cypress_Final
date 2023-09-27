import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebTextBox from "../../helpers/webTextBox";
import WebButton from "../../helpers/webButton";
import Urls from "../../urls/Urls.json";
import commonLocators from "../../pages/commonLocators.json";
import GenericActions from "../../utilities/genericActions";
import WebXpath from "../../helpers/webXpath";
import WebText from "../../helpers/webText";

Given('user navigates to the {string} page', (url)=> {
  const actions = new GenericActions();
  cy.wait(2000)
  actions.visit(Urls[url]);
});

When("user clicks on the {string} button",(elementIdentifier)=> {
  const webButton = new WebButton();
  webButton.click(commonLocators[elementIdentifier])
});

When('user enters value {string} in the {string} input field', (text, elementIdentifier) => {
  const webButton = new WebButton();
  const webTextBox = new WebTextBox();
  webButton.focusClick(commonLocators[elementIdentifier])
  webTextBox.typeText(commonLocators[elementIdentifier], text)
});

Then('user can view {string}',(text) =>{
  const webXpath = new WebXpath();
  webXpath.shouldContainTextByXpath(text)
});

Then('the corresponding page appears with the expected elements: {string}',(elementIdentifier)=>{
  const webXpath = new WebXpath();
  let text = elementIdentifier.toString();
  let textArray = text.split(",")
  for (let count = 0; count < textArray.length; count++) {
    webXpath.shouldContainTextByXpath(textArray[count])
  }
});

When('user is on {string} page of {string}', (elementIdentifier) => {
  const webText = new WebText();
  webText.getText(commonLocators[elementIdentifier])
});

Given('{string} keyword is {string}',(elementIdentifier,text)=>{
    const webTextBox = new WebTextBox();
    webTextBox.typeText(commonLocators[elementIdentifier],text)
});
  
Given('{string} is {string}', (elementIdentifier,text) => {
  const webTextBox = new WebTextBox();
      if(elementIdentifier==="specialization") {
       webTextBox.typeText(commonLocators[elementIdentifier], text)
       webTextBox.typeText(commonLocators[elementIdentifier], '{downarrow}')
       webTextBox.typeText(commonLocators[elementIdentifier], '{enter}')
      }
      else if(elementIdentifier==="doctor Per Page") {
        const webText = new WebText();
        webText.shouldBeVisible(commonLocators[elementIdentifier],text)
      }
  });
  
Given('{string} is clicked',(elementIdentifier)=>{
  const webButton = new WebButton();
    webButton.click(commonLocators[elementIdentifier])
});
  
Then('{string} contain doctor for search {string} are displayed',(elementIdentifier,text)=>{
  const webText = new WebText();
   webText.shouldBeVisible(commonLocators[elementIdentifier],text)
});

Given('user clicks on the {string} field',(elementIdentifier) => {
  const webXpath = new WebXpath(); 
   webXpath.clickByXpath(elementIdentifier)
});
 


