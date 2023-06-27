Feature:Patient Registration

    Scenario Outline:User navigates to the Patient Registration page and signs up
        Given user navigates to the "<Page Type>" page
        When user enters value "<Name>" in the "full Name" input field
        And user selects checkbox with value "<Gender Type>"
        And user selects "<Date>" in the "date" input select field
        And user selects "<Month>" in the "month" input select field
        And user selects "<Year>" in the "year" input select field
        And user enters value "<Email>" in the "user Email" input field
        And user enters value "<Mobile Number>" in the "mobile Number" input field
        And user enters value "<Password>" in the "create Password" input field
        And user enters value "<Password>" in the "confirm Password" input field
        When user clicks on the "register" button
        Then user can view "<Registration Message>"

            Examples:
                | Name         | Email                   | Mobile Number | Password     | Gender Type | Page Type            | Date | Month | Year | Registration Message    |
                | Hunter Brown | hunterbrown04@gmail.com | 9724811869    | 9797@Qwerty  | Male        | PatientRegistration  | 5    | May    |1998 | Signed up successfully! |



#//---------------------------------------------------------------------------------------------------------------------------------------------------

    Scenario Outline:User navigates to the Patient Registration and signs up with invalid data
        Given user navigates to the "<Page Type>" page
        When user enters value "<Name>" in the "full Name" input field
        And user selects checkbox with value "<Gender Type>"
        And user enters value "<Email>" in the "user Email" input field
        And user enters value "<Mobile Number>" in the "mobile Number" input field
        And user enters value "<Password>" in the "create Password" input field
        And user enters value "<Password>" in the "confirm Password" input field
        Then user can view "<error Message>"
        Examples:
            | Name  | Email       | Mobile Number | Page Type            | Password    | error Message                                | Gender Type |
            | sam.1 | abc@abc.com | 9541108298    | PatientRegistration | 9797@Qwerty | Please enter a valid name!                   | Male        |
            | sam+- | abc@abc.com | 9876563211    | PatientRegistration | 9797@Qwerty | Please enter a valid name!                   | Male        |
            | sam   | ab.com      | 9541108297    | PatientRegistration | 9797@Qwerty | Please enter a valid e-mail address!         | Male        |
            | sam   | .com        | 9876543211    | PatientRegistration | 9797@Qwerty | Please enter a valid e-mail address!         | Male        |
            | sam   | abc@abc.com | 954110829     | PatientRegistration | 9797@Qwerty | Please enter a valid 10-digit mobile number! | Male        |
            | sam   | abc@abc.com | 98432115      | PatientRegistration | 9797@Qwerty | Please enter a valid 10-digit mobile number! | Male        |



#//----------------------------------------------------------------------------------------------------------------------------------------------------------


    Scenario Outline:User is not able to register with invalid password
        Given user navigates to the "<Page Type>" page
        When user enters value "<Name>" in the "full Name" input field
        And user selects checkbox with value "<Gender Type>"
        And user enters value "<Email>" in the "user Email" input field
        And user enters value "<Mobile Number>" in the "mobile Number" input field
        And user enters value "<Password>" in the "create Password" input field
        And user enters value "<Password>" in the "confirm Password" input field
        Then user can view "<rule>"
        Examples:
            | Name      | Mobile Number | Gender Type| Email       | Password       | rule                                        | Page Type            |
            | Test User | 9876543211    | Male       | abc@abc.com | Alp@1          | Must contain at least 6 characters.         | PatientRegistration |
            | Test User | 9876543211    | Male       | abc@abc.com | Alpha123       | Must contain at least one special character.| PatientRegistration |
            | Test User | 9876543211    | Male       | abc@abc.com | alpha@123      | Must contain uppercase letter.              | PatientRegistration |
            | Test User | 9876543211    | Male       | abc@abc.com | ALPHA@12       | Must contain lowercase letter               | PatientRegistration |
            | Test User | 9876543211    | Male       | abc@abc.com | Alpha@itsystems| Must contain at least one number            | PatientRegistration |
            | Test User | 9876543211    | Male       | abc@abc.com | Alpha@12       | Passwords must match.                       | PatientRegistration |



#//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Scenario Outline:User is not able to register with existing mobile number & email
        Given user navigates to the "<Page Type>" page
        When user enters value "<Name>" in the "full Name" input field
        And user selects checkbox with value "<Gender Type>"
        And user enters value "<Email>" in the "user Email" input field
        And user enters value "<Mobile Number>" in the "mobile Number" input field
        And user enters value "<Password>" in the "create Password" input field
        And user enters value "<Password>" in the "confirm Password" input field
        Then user can view "<error Message>"
        Examples:
            | Name         | Email                 | Mobile Number | Password    | Gender Type | Page Type            | Date | Month | Year | Email              | Mobile Number | error Message                 |
            | Hunter Brown | hunterbrown@gmail.com | 9541508298    | 9797@Qwerty | Male        | PatientRegistration | 5    | 5     | 1998 | test@testuser1.com | 9541308298    | Email address already exists! |
            | Hunter Brown | test@testuser.com     | 9541108299    | 9797@Qwerty | Male        | PatientRegistration | 5    | 5     | 1998 | test@testuser.com  | 9541308295    | Mobile number already exists! |         
