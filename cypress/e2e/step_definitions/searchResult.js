import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebText from "../../helpers/webText";
import commonLocators from "../../pages/commonLocators.json";
import Urls from "../../urls/Urls.json"
import GenericActions from "../../utilities/genericActions";

const webText = new WebText();
const actions = new GenericActions();

Then('user should see {string} {string}',(element,text)=>{
  webText.shouldBeVisible(commonLocators[element],text)
});

Then('result page is move to {string} page',(url)=>{
  actions.checkUrl(Urls[url])
})