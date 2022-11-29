
class GenericActions {

    clearText(element) {
        element.clear().then(function () {
            cy.log(' Clearing of field !!!');
        }, function (err) {
            cy.log('--->Error: Clearing did not perform due to: ' + err);
            //throw err;
        });
    }

    typeText(element, data) {
        element.clear().type(data).then(function () {
            cy.log('             Typing of the field with value: ' + data);
        }, function (err) {
            cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
            //throw err;
        });
    }


    drag(sourceElement, targetElement) {
        cy.get(sourceElement).drag(targetElement).then(function () {
            cy.log('Element is dragged from ' + sourceElement + ' to ' + targetElement);
        }, function (err) {
            cy.log('--->Error: Unable to drag Element due to' + err);
            //throw err;
        });
    }


    typeTextWithoutClearingExistingText(element, data) {

        element.type(data).then(function () {
            cy.log('             Typing of the field with value: ' + data);
        }, function (err) {
            cy.log(colors.red('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err));
            //throw err;
        });


    }

    refresh() {
        cy.reload().then(function () {
            cy.log("--->Success: The page got refreshed");
        }, function (err) {
            cy.log("--->Error: The page: " + browser.getCurrentUrl() + " is not refreshed due to: " + err);
            //throw err;
        });

    }

    click(element) {

        element.click().then(function () {
            cy.log("             The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
            //throw err;
        });

    }


    setScrollPageDown() {
        cy.scrollTo(0, 800).then(function () {
            cy.get('.sidebar').scrollTo('bottom')
            cy.log('++++++SCROLLED Down+++++');
        });
    }

    multipleClick(element) {

        element.click({ multiple: true }).then(function () {
            cy.log("             The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
            //throw err;
        });

    }

    focusClick(element) {

        element.click({ force: true }).then(function () {
            cy.log("             The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
            //throw err;
        });

    }

    realclick(element) {

        element.realClick().then(function () {
            cy.log("             The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
            //throw err;
        });

    }

    getText(element) {
        try {
            return element.invoke('text').then(function (text) {
                return new Promise(function (resolve, reject) {
                    cy.log("             The text of element is captured which is: " + err);
                    resolve(text);
                }
                )
            })
        }
        catch (err) {
            cy.log("--->Error: The text of the element couldn't be captured due to: " + err);
        }

    }


    shouldHaveText(element, text) {
        element.should('have.text', text).then(function (text) {
            cy.log("             The element is have: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't have text due to: " + err);
            //throw err;
        });

    }
    shouldHaveValue(element, value) {
        element.should('have.value', value).then(function (text) {
            cy.log("             The element have value: " + value);

        }, function (err) {
            cy.log("--->Error: The element dosn't have value due to: " + err);
            //throw err;
        });

    }

    shouldContainText(element, text) {
        element.should('contain', text).then(function (text) {
            cy.log("             The element contain: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't contain text due to: " + err);
            //throw err;
        });

    }

    shouldHaveCSS(element, cssname, value) {
        element.should('have.css', cssname, value).then(function (text) {
            cy.log("             The element have css value: " + value);

        }, function (err) {
            cy.log("--->Error: The element dosn't have css expected css value due to: " + err);
            //throw err;
        });

    }

    getTitle(element, data) {
        cy.title().then(function (text) {
            cy.log("--->Success: The title of of the Webpage is captured: " + text);
            return text;
        }, function (err) {
            cy.log("--->Error: The title of of the Webpage is not captured: due to: " + err);
            //throw err;
        });

    }

    getAttribute(element, attribute) {
        element.invoke('attr', attribute).then(function (text) {
            cy.log("             The attribute of element is captured which is: " + text);
            return text;
        }, function (err) {
            cy.log("--->Error: The attribute of the element couldn't be captured due to: " + err);
            //throw err;
        });

    }


    selectDropDownUsingText(element, text) {

        element.select(text).then(function () {
            cy.log("--->Success: The " + text + " in dropdown got clicked.");
        }, function (err) {
            cy.log("--->Error: The " + text + " in dropdown couldn't get clicked due to: " + err);
        });


    }

    verifyExactText(element, expectedtext) {
        try {
            if (element.should('have.text', expectedtext)) {
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

    verifyPartialText(element, expectedtext) {
        try {
            if (element.should('contain', expectedtext)) {
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

    verifyExactAttribute(element, attribute, value) {
        try {
            if (element.invoke('attr', attribute).should('equal', value)) {
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

    verifyPartialAttribute(element, attribute, value) {

        try {
            if (element.invoke('attr', attribute).should('contain', value)) {
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

    elementCount(element) {

        try {
            return element.its('length').then(function (size) {
                return new Promise(function (resolve, reject) {
                    resolve(size);
                })
            })
        }
        catch (err) {
            cy.log("count of element cannot be found");
        }

    }

    elementIsPresent(element) {
        try {
            if (element.should('exist')) {
                cy.log("The Element: " + element + " is Present in the webpage.");
            }
            else {
                cy.log("The Element: " + element + " is not Present in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Present.");
        }
    }

    elementIsNotPresent(element) {
        try {
            if (element.should('not.exist')) {
                cy.log("The Element: " + element + " is Not Present in the webpage.");
            }
            else {
                cy.log("The Element: " + element + " is Present in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Present.");
        }
    }

    elementIsDisplayed(element) {
        try {
            if (element.should('be.visible')) {
                cy.log("The Element: " + element + " is Displyaed in the webpage.");
            }
            else {
                cy.log("The Element: " + element + " is not Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }


    }

    elementIsNotDisplayed(element) {
        try {
            if (element.should('not.be.visible')) {
                cy.log("The Element: " + element + " is not Displyaed in the webpage.");
            }
            else {
                cy.log("The Element: " + element + " is Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }


    }


    elementIsEnabled(element) {

        try {
            if (element.should("not.be.disabled")) {
                cy.log("The Element: " + element + " is Displyaed in the webpage.");
            }
            else {
                cy.log("The Element: " + element + " is not Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }

    }



    elementIsNotEnabled(element) {
        try {
            if (element.should("be.disabled")) {
                cy.log("The Element: " + element + " is Displayed in the webpage.");
            }
            else {
                cy.log("The Element: " + element + " is not Displayed in the webpage.");
            }
        }
        catch (err) {
            cy.log("There was an Exception in checking whether the element is Displayed.");
        }

    }

    clearCookies() {
        try {
            cy.clearCookies();

        }
        catch (err) {
            cy.log("The Failed To clear the Catch Data");
        }

    }

    getUnixTimeStamp() {

        var formattedTime = Math.round((new Date()).getTime() / 1000);
        return formattedTime;
    }

    utf8_decode(utftext) {

        var string = "";
        var i = 0;
        var c, c1, c2;
        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;

    }

    genarateemailaddress() {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var string = '';
        var email = '';
        var randomnumber = Math.floor(Math.random() * 90000) + 100000;
        for (var i = 0; i < 15; i++)
            string = chars[Math.floor(Math.random() * chars.length)];
        email = string + +randomnumber + '@gmail.com'
        cy.log(email)
        return email;
    }


    base64Decode(input) {

        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = this.utf8_decode(output);
        //console.log(output);
        return output;

    }

}
export default GenericActions;