import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebXpath from "../../helpers/webXpath.js";
import WebSelectBox from "../../helpers/webSelectBox.js";
import commonLocators from "../../pages/commonLocators.json"

When('user selects checkbox with value {string}',(elementIdentifier)=>{
    const webXpath = new WebXpath();
    webXpath.clickByXpath(elementIdentifier)
});

When('user selects {string} in the {string} input select field', (text,elementIdentifier) => {
    const webSelectbox = new WebSelectBox();
    webSelectbox.selectDropDownUsingText(commonLocators[elementIdentifier], text)
});