import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebXpath from "../../helpers/webXpath.js";
import WebSelectBox from "../../helpers/webSelectBox.js";
import commonLocators from "../../pages/commonLocators.json"

const webXpath = new WebXpath();
const webSelectbox = new WebSelectBox();

When('user selects checkbox with value {string}',(element)=>{
    webXpath.clickByXpath(element)
});

When('user selects {string} in the {string} input select field', (text,element) => {
    webSelectbox.selectDropDownUsingText(commonLocators[element], text)
});