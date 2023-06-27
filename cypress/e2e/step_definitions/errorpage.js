import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebButton from "../../helpers/webButton";
import commonLocators from "../../pages/commonLocators.json"


const webButton = new WebButton();


Given('user logs in with {string} credentials',(Role)=>{
    if(Role==="Patient") {
    cy.visit("/");
    cy.get(".MuiButton-label").click();
    cy.get("#emailOrMobile").type("Jyoti12aggarwal@gmail.com");
    cy.get("#password").type("Jyoti@114");
    cy.get(".MuiButton-label:last()").click();
    }
    else if(Role==="Doctor") {
    cy.visit("/");
    cy.get(".MuiButton-label").click();
    cy.get("#emailOrMobile").type("simran258@gmail.com");
    cy.get("#password").type("simRan@123");
    cy.get(".MuiButton-label:last()").click();
    }
});

When('user clicks on the {string}',(element)=>{
    webButton.click(commonLocators[element])
})
    