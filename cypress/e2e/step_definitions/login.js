import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import WebTextBox from "../../helpers/webTextBox.js";
import Decryption from "../../utilities/decryption.js";
import commonLocators from "../../pages/commonLocators.json"

const webtextBox = new WebTextBox();
const decode = new Decryption();

When("user enters the users {string} in the {string} input field",function (userData,elementIdentifier) {
    let decoderdData= decode.getDecodedString(userData);
    webtextBox.typeText(commonLocators[elementIdentifier], decoderdData);
});

