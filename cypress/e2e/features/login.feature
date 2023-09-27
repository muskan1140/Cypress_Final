Feature: Login Section 


Scenario Outline: Sucessfully Login with valid credential
Given user navigates to the "<Page Type>" page
When user clicks on the "login" button
And user enters the users "<email>" in the "email" input field
And user enters the users "<password>" in the "password" input field
And user clicks on the "submit" button
Then user navigates to the "<Page Type>" page 

    Examples:
      | Page Type |email         | password      |
      | Homepage  |User_email    | User_password |
