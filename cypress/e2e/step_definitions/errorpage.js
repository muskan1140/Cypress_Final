import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebButton from "../../helpers/webButton";
import commonLocators from "../../pages/commonLocators.json";
import GenericActions from "../../utilities/genericActions";
import credentials from "../../fixtures/example.json";
import WebTextBox from "../../helpers/webTextBox";


const webButton = new WebButton();
const actions = new GenericActions();
const webTextBox= new WebTextBox();



Given('user logs in with {string} credentials',(Role)=>{
    actions.visit("/");
    webButton.click(commonLocators['login'])
    webTextBox.typeText(commonLocators[`${Role}_email`],credentials[`${Role}_email`])
    webTextBox.typeText(commonLocators[`${Role}_password`],credentials[`${Role}_password`])
    webButton.click(commonLocators['submit'])
    
});

When('user clicks on the {string}',(element)=>{
    webButton.click(commonLocators[element])
})
    