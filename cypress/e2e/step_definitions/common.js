import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
});
  