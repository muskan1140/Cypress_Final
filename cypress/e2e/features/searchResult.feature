Feature: Search page result functionality

    #https://team-1628225445927.atlassian.net/browse/MYD-156
    @MYD-156
    @Regression

    Scenario: check for the search result page using search keyword or specialization
    Given user navigates to the "<Page Type>" page
    And "search" keyword is "<keyword>"
    And "specialization" is "<special>"
    # And current page is "<page>"
    # And per page is "<count>"
    # When "search" page  is loaded
    # Then Result contain search keyword "<keyword>"
    # And Doctor for specialization "<special>" are displayed

    Examples:
      |Page Type| keyword    | special       | page | count |
      | Homepage| Alberta    | Cosmetology   | 1    | 5     |
