import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import WebTextBox from "../../helpers/webTextBox.js";
import Decryption from "../../utilities/decryption.js";
import commonLocators from "../../pages/commonLocators.json"

When("user enters the users {string} in the {string} input field",function (userData,elementIdentifier) {
    const webTextBox = new WebTextBox();
    const decode = new Decryption();
    let decoderdData= decode.getDecodedString(userData);
    webTextBox.typeText(commonLocators[elementIdentifier], decoderdData);
});

