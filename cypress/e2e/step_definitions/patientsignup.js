import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebXpath from "../../helpers/webXpath.js";
import WebSelectBox from "../../helpers/webSelectBox.js";
import commonLocators from "../../pages/commonLocators.json"

const webxpath = new WebXpath();
const webselectbox = new WebSelectBox();


When('user selects checkbox with value {string}',(element)=>{
    webxpath.clickByXpath(element)
});

When('user selects {string} in the {string} input select field', (text,element) => {
    webselectbox.selectDropDownUsingText(commonLocators[element], text)
});