import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebButton from "../../helpers/webButton";
import commonLocators from "../../pages/commonLocators.json";
import GenericActions from "../../utilities/genericActions";
import WebTextBox from "../../helpers/webTextBox";
import Decryption from "../../utilities/decryption";

Given('user logs in with {string} credentials',(Role)=>{
    const actions = new GenericActions();
    const decryption = new Decryption();
    const webButton = new WebButton();
    const webTextBox= new WebTextBox();
    const decoded_string = decryption.getDecodedString(`${Role}_email`);
    const deconded_email = decryption.getDecodedString(`${Role}_password`);
    cy.log("test",decoded_string,deconded_email)
    actions.visit("/");
    webButton.click(commonLocators['login'])
    webTextBox.typeText(commonLocators[`${Role}_email`], decoded_string)
    webTextBox.typeText(commonLocators[`${Role}_password`],deconded_email)
    webButton.click(commonLocators['submit'])
    
});

When('user clicks on the {string}',(elementIdentifier)=>{
    const webButton = new WebButton();
    webButton.click(commonLocators[elementIdentifier])
})

    