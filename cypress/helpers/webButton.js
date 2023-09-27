import WebElement from "./webElement";
const webElement = new WebElement();

class WebButton {
  
    click(elementIdentifier) {
        webElement.getWebElement(elementIdentifier).click().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    multipleClick(elementIdentifier) {
        webElement.getWebElement(elementIdentifier).click({ multiple: true }).then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    focusClick(elementIdentifier) {
        webElement.getWebElement(elementIdentifier).click({ force: true }).then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    realclick(elementIdentifier) {
        webElement.getWebElement(elementIdentifier).realClick().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    check(elementIdentifier){
        webElement.getWebElement(elementIdentifier).check().then(function() {
            cy.log("The element got checked");
        }), function (err){
            cy.log("-->Error: The element couldn't get checked due to:"+ err);
        }
    }
}

export default WebButton;

