Feature: Search Bar

  @SEBA001 @Regression @MYD-40 @NotAutomated @Patient @Search
  Scenario Outline: Search Bar - Check for the search functionality for doctors
    Given user navigates to the "<Page Type>" page
    When user enters value "<Data>" in the "doctor" input field
    And user clicks on the "search Icon" button
    Then the corresponding page appears with the expected elements: "<Item>"

    Examples:
      | Data    | Item                                   | Page Type |
      | Alice   | Dr. Alice Brakus                       | Homepage  |
      | Rosi    | Dr. Rosina Watsica,Dr. Kathleen Strosin| Homepage  |

# # //-----------------------------------------------------------------------------------------------------------

  @SEBA003 @Regression @Sanity @MYD-40 @NotAutomated @Patient @Specialities @Search
  Scenario Outline: Search Bar - Check for the search functionality for doctors and specialities
    Given user navigates to the "<Page Type>" page
    When user clicks on the "specialities Field" button
    When user enters value "<Value>" in the "service" input field
    When user enters value "<Data>" in the "doctor" input field
    And user clicks on the "search Icon" button
    Then the corresponding page appears with the expected elements: "<Item>"

    Examples:
      | Data     | Item             | Page Type | Value                           |
      | Sarah    | Dr. Sarah Lynch  | Homepage  | Diabetology                     |
      | Sasha    | Dr. Sasha Wehner | Homepage  | Clinical Nutrition & Dietetics  |


# //---------------------------------------------------------------------------------------------------------------

  @SEBA004 @Regression @MYD-40 @NotAutomated @Patient @Search
  Scenario Outline: Search Bar - Check for the search functionality with invalid doctor name
   Given user navigates to the "<Page Type>" page
    When user clicks on the "specialities Field" button
    When user enters value "<Data>" in the "doctor" input field
    And user clicks on the "search Icon" button
    Then user can view "<alert Message>"

    Examples:
      | Page Type | Data      | alert Message    |
      | Homepage  | Rish123@# | No results found |

# //--------------------------------------------------------------------------------------------------------------------


  @SEBA005 @Regression @MYD-40 @NotAutomated @Patient @Specialities @Search
  Scenario Outline: Search Bar - Check for the search functionality with invalid specialities
    Given user navigates to the "<Page Type>" page
    When user enters value "<Data>" in the "service" input field
    Then user can view "<alert Message>"

    Examples:
      | Data     | Page Type | alert Message |
      | 1245@#$% | Homepage  | No options    |
