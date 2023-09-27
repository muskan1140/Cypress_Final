import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import WebText from "../../helpers/webText";
import commonLocators from "../../pages/commonLocators.json";
import Urls from "../../urls/Urls.json"
import GenericActions from "../../utilities/genericActions";

Then('user should see {string} {string}',(elementIdentifier,text)=>{
  const webText = new WebText();
  webText.shouldBeVisible(commonLocators[elementIdentifier],text)
});

Then('result page is move to {string} page',(url)=>{
  const actions = new GenericActions();
  actions.checkUrl(Urls[url])
})