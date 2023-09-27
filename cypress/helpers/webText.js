import WebElement from "./webElement";
const webElement = new WebElement();
class WebText {
   
    getText(elementIdentifier) {
        webElement.getWebElement(elementIdentifier).invoke('text').then(function (text) {
                    cy.log("The text of element is captured which is: " + text);


        },function (err) {
            cy.log("--->Error: The text of the element couldn't be captured due to: " + err);
        });
    }

    shouldBeVisible(elementIdentifier, text) {
        webElement.getWebElement(elementIdentifier).should('be.visible', text).then(function (text) {
            cy.log("element should be visible:" + text);

        },
            function (err) {
                cy.log("--->Error: element shouldn't be visible" + err);
            });
    }

    type(elementIdentifier, value) {
        webElement.getWebElement([elementIdentifier]).type(value).then(function () {
            cy.log("typing field values should be valid");

        },
            function (err) {
                cy.log("typing field values shouldn't be valid");
            });
    }

    shouldHaveText(elementIdentifier, text) {
        webElement.getWebElement(elementIdentifier).should('have.text', text).then(function (text) {
            cy.log("The element is have: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't have text due to: " + err);
        });

    }

    shouldHaveValue(elementIdentifier, value) {
        elementIdentifier.should('have.value', value).then(function (text) {
            cy.log("The element have value: " + value);

        }, function (err) {
            cy.log("--->Error: The element dosn't have value due to: " + err);
        });

    }

    shouldContainText(elementIdentifier, text) {
        webElement.getWebElement(elementIdentifier).should('contain', text).then(function (text) {
            cy.log("The element contain: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't contain text due to: " + err);
        });
    }


    verifyExactText(elementIdentifier, expectedtext) {
        try {
            if (elementIdentifier.should('have.text', expectedtext)) {
                cy.log("The Expected Text matches the actual " + expectedtext);
            }
            else {
                cy.log("The Expected Text does not matches the actual " + expectedtext);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of Text");
        }
    }

    verifyPartialText(elementIdentifier, expectedtext) {
        try {
            if (elementIdentifier.should('contain', expectedtext)) {
                cy.log("The Expected Text matches the actual " + expectedtext);
            }
            else {
                cy.log("The Expected Text does not matches the actual " + expectedtext);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of Text");
        }
    }

    verifyExactAttribute(elementIdentifier, attribute, value) {
        try {
            if (elementIdentifier.invoke('attr', attribute).should('equal', value)) {
                cy.log("The expected attribute: " + attribute + " value matches the actual " + value);
            }
            else {
                cy.log("The expected attribute: " + attribute + " value does not matches the actual " + value);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of attibute value");
        }

    }

    verifyPartialAttribute(elementIdentifier, attribute, value) {

        try {
            if (elementIdentifier.invoke('attr', attribute).should('contain', value)) {
                cy.log("The expected attribute: " + attribute + " value matches the actual " + value);
            }
            else {
                cy.log("The expected attribute: " + attribute + " value does not matches the actual " + value);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of attibute value");
        }
    }
}

export default WebText;