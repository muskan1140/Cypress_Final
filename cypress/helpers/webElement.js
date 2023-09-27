class WebElement {
  
    elementCount(elementIdentifier) {

        try {
            return elementIdentifier.its('length').then(function (size) {
                return new Promise(function (resolve, reject) {
                    resolve(size);
                })
            })
        }
        catch (err) {
            cy.log("count of element cannot be found");
        }
    }

    elementIsPresent(elementIdentifier) {
        try {
            if (elementIdentifier.should('exist')) {
                cy.log("The Element: " + elementIdentifier + " is Present in the webpage.");
            }
            else {
                cy.log("The Element: " + elementIdentifier + " is not Present in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Present.");
        }
    }

    elementIsNotPresent(elementIdentifier) {
        try {
            if (elementIdentifier.should('not.exist')) {
                cy.log("The Element: " + elementIdentifier + " is Not Present in the webpage.");
            }
            else {
                cy.log("The Element: " + elementIdentifier + " is Present in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Present.");
        }
    }

    elementIsDisplayed(elementIdentifier) {
        try {
            if (elementIdentifier.should('be.visible')) {
                cy.log("The Element: " + elementIdentifier + " is Displyaed in the webpage.");
            }
            else {
                cy.log("The Element: " + elementIdentifier + " is not Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }


    }

    elementIsNotDisplayed(elementIdentifier) {
        try {
            if (elementIdentifier.should('not.be.visible')) {
                cy.log("The Element: " + elementIdentifier + " is not Displyaed in the webpage.");
            }
            else {
                cy.log("The Element: " + elementIdentifier + " is Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }


    }

    elementIsEnabled(elementIdentifier) {

        try {
            if (elementIdentifier.should("not.be.disabled")) {
                cy.log("The Element: " + elementIdentifier + " is Displyaed in the webpage.");
            }
            else {
                cy.log("The Element: " + elementIdentifier + " is not Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }

    }
   
    elementIsNotEnabled(elementIdentifier) {
        try {
            if (elementIdentifier.should("be.disabled")) {
                cy.log("The Element: " + elementIdentifier + " is Displayed in the webpage.");
            }
            else {
                cy.log("The Element: " + elementIdentifier + " is not Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }
    }

    
    shouldHaveCSS(elementIdentifier, cssname, value) {
        elementIdentifier.should('have.css', cssname, value).then(function (text) {
            cy.log("The element have css value: " + value);

        }, function (err) {
            cy.log("--->Error: The element dosn't have css expected css value due to: " + err);
        });
    }

    getAttribute(elementIdentifier, attribute) {
        elementIdentifier.invoke('attr', attribute).then(function (text) {
            cy.log("The attribute of element is captured which is: " + text);
            return text;
        }, function (err) {
            cy.log("--->Error: The attribute of the element couldn't be captured due to: " + err);
        });

    }

    drag(sourceElement, targetElement) {
        cy.get(sourceElement).drag(targetElement).then(function () {
            cy.log('Element is dragged from ' + sourceElement + ' to ' + targetElement);
        }, function (err) {
            cy.log('--->Error: Unable to drag Element due to' + err);
        });
    }

    getWebElement(identifierValue) {
        let locators = identifierValue.split(",")
        switch (locators[0]) {
          case "xpath" : return cy.xpath(locators[1]);
          case "css" : return cy.get(locators[1]);
        };
    }



}

export default WebElement
