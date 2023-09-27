import WebElement from "./webElement";
const webElement = new WebElement();
class WebTextBox {

    clearText(elementIdentifier) {

        webElement.getWebElement(elementIdentifier).clear().then(function () {
            cy.log(' Clearing of field !!!');
        }, function (err) {
            cy.log('--->Error: Clearing did not perform due to: ' + err);
        });
    }

    typeText(elementIdentifier, data) {
        webElement.getWebElement(elementIdentifier).type(data).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
        });
    }

    typeTextWithoutClearingExistingText(elementIdentifier, data) {

        elementIdentifier.type(data).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log(colors.red('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err));
        });
    }
}

export default WebTextBox