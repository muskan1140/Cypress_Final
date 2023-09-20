Feature: Error Page

  @ERPA001 @MYD-83 @Regression @NotAutomated @Patient @Error
  Scenario Outline: Checking the visibility of the UI element of 404 error page
      Given user navigates to the "<Page Type>" page
      And the corresponding page appears with the expected elements: "<Item>"
      Examples:
          | Page Type | Item |
          | 404 error | OOPS!|


  # //----------------------------------------------------------------------------------------------------
  @ERPA002 @MYD-83 @Regression @Sanity @NotAutomated @Patient @Error
  Scenario Outline: Checking the functionality of 404 error page
    Given user logs in with "<Role>" credentials
    And user navigates to the "<Page Type>" page
    When user clicks on the "<Text Links>"
    Then the corresponding page appears with the expected elements: "<Item>"
    Examples:
      | Page Type | Role    | Text Links       | Item                          |
      | 404 error | Patient | My Appointments  | My Appointment                |
      | 404 error | Patient | Account Settings | My Profile                    |
      | 404 error | Patient | doctors          | 20+ Specialities,100+ Doctors |

  # //--------------------------------------------------------------------------------------------------------
  @ERPA003 @MYD-83 @Regression @NotAutomated @Error
  Scenario Outline: Checking the functionality of 404 error page without logging in
    Given user navigates to the "<Page Type>" page
    When user clicks on the "<Text Links>"
    Then the corresponding page appears with the expected elements: "<Item>"
    Examples:
      | Page Type | Text Links   | Item                                |
      | 404 error | doctors      | Login,20+ Specialities,100+ Doctors |
      | 404 error | login/SignUp | Login,Sign up,Forgot Password       |

  # # //-------------------------------------------------------------------------------------------------------------
  @ERPA004 @MYD-83 @Regression @Sanity @NotAutomated @Doctor @Error
  Scenario Outline: Checking the functionality of 404 error page for doctors
    Given user logs in with "<Role>" credentials
    And user navigates to the "<Page Type>" page
    When user clicks on the "<Text Links>"
    Then the corresponding page appears with the expected elements: "<Item>"
    Examples:
      | Page Type | Role   | Text Links       | Item                                           |
      | 404 error | Doctor | My Appointments  | My Appointment                                 |
      | 404 error | Doctor | Account Settings | My Profile                                     |