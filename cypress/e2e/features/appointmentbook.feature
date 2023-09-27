Feature: Appointment Booking

    @APBO001 @MYD-79 @Regression @NotAutomated @Appointment
    Scenario Outline: Checking the functionality of booking an appointment when patient doesn't log in
        Given user navigates to the "<Page Type>" page
        When user enters value "<Data>" in the "doctor" input field
        And user clicks on the "search Icon" button
        When user clicks on the "doctor Card"
        And user clicks on the "<Date Slot>" button
        And user clicks on the "<Time Slot>" button
        Then user can view "<Error Message>"
        Examples:
            | Page Type | Data   | Doctor Card       | Date Slot   | Time Slot       | Error Message|
            | Homepage  | Priya  | Dr. Priya Sharma  |  first Slot | first Time Slot | Please       |


    # //------------------------------------------------------------------------------------------------------------------------------

    @APBO002 @MYD-79 @Regression @Sanity @NotAutomated @Appointment @Payment
    Scenario Outline: Checking the functionality of booking an appointment for myself
        Given user logs in with "<Role>" credentials
        And user navigates to the "<Page Type>" page
        When user enters value "<Data>" in the "doctor" input field
        And user clicks on the "search Icon" button
        When user clicks on the "doctor Card"
        And user clicks on the "<Date Slot>" button
        And user clicks on the "<Time Slot>" button
        And user clicks on the "NEXT" field
        And user clicks on the "CONFIRM AND PROCEED" field
        And user enters value "<Card Number>" in the "credit/debit card number" input field
        And user clicks on the "expiration month field"
        And user clicks on the "<Expiration Month>"
        And user clicks on the "expiration year field"
        And user clicks on the "<Expiration Year>"
        And user enters value "<Security Code>" in the "security code" input field
        And user clicks on the "MAKE PAYMENT" field
        Then user can view "<Message>"
        Examples:
        Examples:
            | Role    | Page Type | Data   | Doctor           | Date Slot  | Time Slot       | Card Number      | Expiration Month | Expiration Year | Security Code | Message                             |
            | Patient | Homepage  | Priya  | Dr. Priya Sharma | first Slot | first Time Slot | 4242424242424242 | select field     | select field    | 1234          | Appointment is booked successfully! |
 

    # //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    @APBO003 @MYD-79 @Regression @Sanity @NotAutomated @Appointment @Payment
    Scenario Outline: Checking the functionality of booking an appointment for someone else
        Given user logs in with "<Role>" credentials
        And user navigates to the "<Page Type>" page
        When user enters value "<Data>" in the "doctor" input field
        And user clicks on the "search Icon" button
        When user clicks on the "doctor Card"
        And user clicks on the "<Date Slot>" button
        And user clicks on the "<Time Slot>" button
        And user clicks on the "Someone Else" field
        And user enters value "<Name>" in the "patient name" input field
        And user enters value "<Mobile Number>" in the "patient mobile number" input field
        And user clicks on the "NEXT" field
        And user clicks on the "CONFIRM AND PROCEED" field
        And user enters value "<Card Number>" in the "credit/debit card number" input field
        And user clicks on the "expiration month field"
        And user clicks on the "<Expiration Month>"
        And user clicks on the "expiration year field"
        And user clicks on the "<Expiration Year>"
        And user enters value "<Security Code>" in the "security code" input field
        And user clicks on the "MAKE PAYMENT" field
        Then user can view "<Message>"
        Examples:
            | Role    | Page Type | Data  | Doctor            | Date Slot  | Time Slot       | Second Radio Button | Name          | Mobile Number | Card Number      | Expiration Month | Expiration Year | Security Code | Message                             |
            | Patient | Homepage  | Priya | Dr. Priya Sharma | first Slot | first Time Slot | Someone Else        | Poonam Sharma | 8787878787    | 4242424242424242 | select field     | select field    | 1234          | Appointment is booked successfully! |