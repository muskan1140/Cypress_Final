Feature: Forgot Reset Password

    @FOREPA001 @MYD-319 @Regression @NotAutomated @Sanity @Password
    Scenario Outline: Checking the functionality of forgot password link
        Given user navigates to the "<Page Type>" page
        When user clicks on the "Forgot Password" field
        Then the corresponding page appears with the expected elements: "<Item>"
        Examples:
            | Page Type | Item            |
            | Login     | Forgot Password |

    # //---------------------------------------------------------------------------------

    @FOREPA002 @MYD-319 @Regression @NotAutomated @Sanity @Password
    Scenario Outline: Checking the functionality of reset link with valid email
        Given user navigates to the "<Page Type>" page
        When user enters value "<Email>" in the "provided Email" input field
        And user clicks on the "send Reset Link" button
        Then user can view "<Message>"
        Examples:
            | Page Type       | Email            | Message                          |
            | ForgotPassword  | poonam@gmail.com | We have sent password reset link |

    # //--------------------------------------------------------------------------------------

    @FOREPA003 @MYD-319 @Regression @NotAutomated @Password
    Scenario Outline: Checking the functionality of reset link with invalid email
        Given user navigates to the "<Page Type>" page
        When user enters value "<Email>" in the "provided Email" input field
        And user clicks on the "send Reset Link" button
        Then user can view "<Error Message>"
        Examples:
            | Page Type       | Email             | Error Message                              |
            | ForgotPassword  | poonam5@gmail.com | Unable to reset password. Please try again |


    # //---------------------------------------------------------------------------------------------------------

    @FOREPA004 @MYD-319 @Regression @NotAutomated @Sanity @Password
    Scenario Outline: Checking the functionality of reset password With satisfied rules
        Given user navigates to the "<Page Type>" page
        When user enters value "<New Password>" in the "user Password" input field
        And user enters value "<Confirm Password>" in the "confirm password" input field
        And user clicks on the "reset Password" button
        Then user can view "<Message>"
        Examples:
            | Page Type      | New Password | Confirm Password | Message                                    |
            | ResetPassword  | Poonam#12    | Poonam#12        | Unable to reset password. Please try again |

    # //------------------------------------------------------------------------------------------------------------

    @FOREPA005 @MYD-319 @Regression @NotAutomated @Password
    Scenario Outline: Checking the functionality of reset password with unsatisfied rules
        Given user navigates to the "<Page Type>" page
        When user enters value "<New Password>" in the "user Password" input field
        And user enters value "<Confirm Password>" in the "confirm password" input field
        Then user can view "<Error Message>"
        Examples:
            | Page Type     | New Password | Confirm Password | Error Message                  |
            | ResetPassword | Alpha123     | Alpha123         | At least one special character |
            | ResetPassword | ALPHA@12     | ALPHA@12         | A lowercase letter             |
            | ResetPassword | alpha@123    | alpha@123        | An uppercase letter            |
            | ResetPassword | Alpha@#$     | Alpha@#$         | At least one number            |
            | ResetPassword | Alpha@12     | Alpha@123        | Passwords must match           |