import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebTextBox from "../../helpers/webTextBox";
import WebButton from "../../helpers/webButton";
import Urls from "../../../urls/Urls.json";
import commonLocators from "../../pages/commonLocators.json";
import GenericActions from "../../utilities/genericActions";
import WebXpath from "../../helpers/webXpath";
import WebText from "../../helpers/webText";


const webtextBox = new WebTextBox();
const webbutton = new WebButton();
const generic = new GenericActions();
const webxpath = new WebXpath();
const webtext = new WebText();

Given('user navigates to the {string} page',(url)=>{
    generic.visit(Urls[url])
});

When("user clicks on the {string} button",(element)=> {
    webbutton.click(commonLocators[element])
});

When('user enters value {string} in the {string} input field',(name,element)=>{
    webtextBox.typeText(commonLocators[element],name)
});

Then('user can view message {string}', (text) => {
    webxpath.shouldContainTextByXpath(text)
});

Then('the corresponding page appears with the expected elements: {string}',(element)=>{
    let name = element.toString();
    let doctorName = name.split(",")
    for (let count = 0; count < doctorName.length; count++) {
      webtext.verifyPartialText(element, doctorName[count]);
    }
});

When('user is on {string} page of {string}', (text,element) => {
   webtext.getText(commonLocators[element])
});

