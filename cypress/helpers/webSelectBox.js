import WebElement from "./webElement";
const webElement = new WebElement();
class WebSelectBox {

    selectDropDownUsingText(elementIdentifier, text) {

        webElement.getWebElement(elementIdentifier).select(text).then(function () {
            cy.log("--->Success: The " + text + " in dropdown got clicked.");
        }, function (err) {
            cy.log("--->Error: The " + text + " in dropdown couldn't get clicked due to: " + err);
        });


    }
}

export default WebSelectBox