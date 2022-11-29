import HomeLocators from "../pages/LoginPage";
import GenericActions from "../Utilities/genericActions";

const generic = new GenericActions();
const home = new HomeLocators();


class LoginPage {
   
    typeText(username){
        generic.typeText(home.getUserName(),username);
    }
}

export default LoginPage;