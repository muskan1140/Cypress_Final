Feature: Change password

    @CHPA001 @MYD-197 @Regression @Sanity @Patient @ChangePassword
    Scenario Outline: Checking the functionality of change password page with satisfied rules
        Given user logs in with "<Role>" credentials
        And user clicks on the "Account Settings" field
        And user clicks on the "<Page Type>" field
        When user enters value "<Current Password>" in the "current password" input field
        And user enters value "<New Password>" in the "new password" input field
        And user enters value "<Confirm Password>" in the "confirm password" input field
        And user clicks on the "submit" button
        Then user can view "<Message>"
        Examples:
            | Role    | Page Type       | Current Password | New Password | Confirm Password | Message                       |
            | Patient | Change Password | Jyoti@136        | Jyoti@143    | Jyoti@143        | Password changes successfully |

    # //------------------------------------------------------------------------------------------------------------------------------------------

    @CHPA002 @MYD-197 @Regression @Patient @ChangePassword
    Scenario Outline: Checking the functionality of change password page with unsatisfied rules
        Given user logs in with "<Role>" credentials
        And user clicks on the "Account Settings" field
        And user clicks on the "<Page Type>" field
        When user enters value "<Current Password>" in the "current password" input field
        And user enters value "<New Password>" in the "new password" input field
        And user enters value "<Confirm Password>" in the "confirm password" input field
        Then user can view "<Error Message>"
        Examples:
            | Role    | Page Type       | Current Password | New Password | Confirm Password | Error Message                  |
            | Patient | Change Password | Jyoti@114        | Alp@1        | Alp@1            | At least six characters        |
            | Patient | Change Password | Jyoti@114        | Alpha123     | Alpha123         | At least one special character |
            | Patient | Change Password | Jyoti@114        | ALPHA@12     | ALPHA@12         | A lowercase letter             |
            | Patient | Change Password | Jyoti@114        | alpha@123    | alpha@123        | An uppercase letter            |
            | Patient | Change Password | Jyoti@114        | Alpha@12     | Aarav@123        | Passwords must match           |
            | Patient | Change Password | Jyoti@114        | Alpha@#$     | Aarav@#$         | At least one number            |


    # //----------------------------------------------------------------------------------------------------------------------------------------------


    @CHPA003 @MYD-197 @Regression @Patient @ChangePassword
    Scenario Outline: Checking the functionality of change password page with invalid data
        Given user logs in with "<Role>" credentials
        And user clicks on the "Account Settings" field
        And user clicks on the "<Page Type>" field
        When user enters value "<Current Password>" in the "current password" input field
        And user enters value "<New Password>" in the "new password" input field
        And user enters value "<Confirm Password>" in the "confirm password" input field
        And user clicks on the "submit" button
        Then user can view "<Error Message>"
        Examples:
            | Role    | Page Type       | Current Password | New Password | Confirm Password | Error Message             |
            | Patient | Change Password | aaravsh#123      | Aarav@123    | Aarav@123        | Failed to change password |



