Feature: Search page result functionality

  # https://team-1628225445927.atlassian.net/browse/MYD-156
  @MYD-156 @Regression
  Scenario Outline: check for the search result page using search keyword or specialization
  Given user navigates to the "<Page Type>" page
  And "search" keyword is "<keyword>"
  And "specialization" is "<speciality>"
  And "search Icon" is clicked
  And "doctor per page" is "<count>"
  Then "result" contain doctor for search "<keyword>" are displayed

  Examples:
    |Page Type| keyword    | speciality    | page | count |
    | Homepage| Alberta    | Cosmetology   | 1    | 1     |


  # //------------------------------------------------------------------------------------------------
  # https://team-1628225445927.atlassian.net/browse/MYD-156
  @MYD-156

  Scenario Outline: check for the search result page using search keyword
  Given user navigates to the "<Page Type>" page
  And "search" keyword is "<keyword>"
  And "doctor per page" is "<count>"
  And "search Icon" is clicked
  Then "result" contain doctor for search "<keyword>" are displayed

  Examples:
    |Page Type| keyword | page | count |
    | Homepage| Yvonne  | 1    | 1     |


  # //-------------------------------------------------------------------------------------------------
  # https://team-1628225445927.atlassian.net/browse/MYD-156
  @MYD-156

  Scenario Outline: check for the search result page using specialization
    Given user navigates to the "<Page Type>" page
    And "specialization" is "<speciality>"
    And "doctor per page" is "<count>"
    And "search Icon" is clicked
    Then "result" contain doctor for search "<speciality>" are displayed

    Examples:
      | Page Type | speciality | page | count |
      | Homepage  | Audiology  | 1    | 1     |


  # //------------------------------------------------------------------------------------------------------
  # https://team-1628225445927.atlassian.net/browse/MYD-156
  @MYD-156

  Scenario Outline: check for the search result page using unexpected string in search keyword or specialization
    Given user navigates to the "<Page Type>" page
    And "search" keyword is "<keyword>"
    And "specialization" is "<speciality>"
    And "search Icon" is clicked
    Then user should see "error Message" "<message>"

    Examples:
      | Page Type | keyword | speciality | message         |
      | Homepage  | @@@!@   | 78dbxbd    | No result found |
      | Homepage  | @@@!^&  |    @314    | No result found |
      | Homepage  | @3142?  | @@@!@      | No result found |


  # //-----------------------------------------------------------------------------------------------------------
  # https://team-1628225445927.atlassian.net/browse/MYD-156
  @MYD-156

  Scenario Outline: check for the search result page using no input given
    Given user navigates to the "<Page Type>" page
    And "specialization" is "<speciality>"
     And "search Icon" is clicked
    Then result page is move to "<Page Type>" page
    Examples:
      | Page Type | keyword | speciality |
      | Homepage  |         |       __   |
