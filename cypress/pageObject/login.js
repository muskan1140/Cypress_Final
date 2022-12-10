import LoginPageLocators from "../pages/loginPage";
import GenericActions from "../utilities/genericActions";
import WebText from '../helpers/webText';
import Decryption from "../utilities/decryption";
import WebTextBox from '../helpers/webTextBox';
import WebButton from "../helpers/webButton";
import WebXpath from "../helpers/webXpath";

const generic = new GenericActions();
const login = new LoginPageLocators();
const webText = new WebText();
const decode = new Decryption();
const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webXpath = new WebXpath();

class LoginPage { 


    visit(){
        generic.visit();
    }

    checkVisibilityOfHeading(heading){
        webText.verifyExactText(login.getHeading(),heading)
    }

    checkVisibilityOfSubHeading(subheading){
        webText.verifyExactText(login.getSubHeading(),subheading)
    }

    typeEmailOnEmailInputField(email){
        let decodedEmail = decode.getDecodedString(email);
        webTextBox.typeText(login.getEmailField(),decodedEmail) 
    }

    typePasswordOnPasswordInputField(password){
        let decodedPassword = decode.getDecodedString(password);
        webTextBox.typeText(login.getPasswordField(),decodedPassword) 
    }

    checkRememberMeCheckbox(){
        webButton.check(login.getRememberMeCheckBox())
    }

    clickButton(string){
        webXpath.clickByXpath("visibleText",string)
    }

    checkUrlContainsText(url){
        generic.checkUrl(url);
    }

    checkMessageVisibility(string){
        webXpath.shouldContainTextByXpath("visibleText",string)
    }
}

export default LoginPage;