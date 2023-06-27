Feature: Dashboard

  @DA001 @Regression @NotAutomated @Dashboard @Patient @MYD-76
  Scenario Outline: Checking the visibility of UI element
    Given user navigates to the "<Page Type>" page
    Then the corresponding page appears with the expected elements: "<Item>"

  Examples:
      | Page Type | Item                         | 
      | Homepage  | 20+ Specialities,240+ Doctors|


# //-------------------------------------------------------------------------------------------

 @DA002 @Regression @Sanity @NotAutomated @Dashboard @SpecialitiesCard @Patient @MYD-76
  Scenario Outline: Check the functionality of Specialities Card
    Given user navigates to the "<Page Type>" page
    When user clicks on the "<SpecialityCard>" button
    Then the corresponding page appears with the expected elements: "<Item>"

    Examples: 
      | Page Type | SpecialityCard         | Item                                              |
      | Homepage  | fourth Speciality Card | Dr. Layne Ryan,Dr. Henry Friesen,Dr. Alberta Yost |

# //--------------------------------------------------------------------------------------------

 @DA003 @Regression @NotAutomated @Dashboard @SpecialitiesCard @Patient @MYD-76
  Scenario Outline: Check the functionality of View all specialities link
    Given user navigates to the "<Page Type>" page
    When user clicks on the "view All Specialities" button
    Then the corresponding page appears with the expected elements: "<Item>"

  Examples:
      | Page Type | Item                                                  |
      | Homepage  | Dermatology,Bone Marrow,Clinical Psychology,Audiology |


# //------------------------------------------------------------------------------------------------

@DA004 @Regression @Sanity @NotAutomated @Dashboard @DoctorCard @Patient @MYD-76
  Scenario Outline: Check the functionality of Doctor card
    Given user navigates to the "<Page Type>" page
    When user clicks on the "<Doctor Card>" button
    Then the corresponding page appears with the expected elements: "<Item>"

  Examples:
      | Page Type | Doctor Card       | Item                                                          |
      | Homepage  | first Doctor Card | Consultation Fee: Rs. 3022,Specialities,Qualifications,Reviews|


# //------------------------------------------------------------------------------------------------------

  @DA005 @Regression @NotAutomated @Dashboard @Pagination @Patient @MYD-31
  Scenario Outline: Check the functionality of pagination on Doctor cards by clicking on number
    Given user navigates to the "<Page Type>" page
    And user can view list of "doctor Cards"
    And user is on "<Number>" page of "dash Board"
    When user clicks on "<Button>" page of "dash Board"
    Then user is on "<Value>" page of "dash Board"

    Examples:
      | Page Type | Number | Button | Value | text |
      | Homepage  | 3      | 2      | 2     | 3    |
