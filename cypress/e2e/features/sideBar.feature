Feature: Sidebar Functionality

    @SIFU001 @MYD-336 @Regression @Sanity @NotAutomated @Sidebar
    Scenario Outline: Checking the functionality of sidebar when patient does not logs in
        Given user navigates to the "<Page Type>" page
        When user clicks on the "<Item>" field
        Then the corresponding page appears with the expected elements: "<Element>"
        Examples:
            | Page Type | Item         | Element                       |
            | Homepage  | Doctors      | 20+ Specialities,100+ Doctors |
            | Homepage  | Specialities | 20+ Specialities              |


    # //---------------------------------------------------------------------------------------------------

    @SIFU002 @MYD-336 @Regression @Sanity @NotAutomated @Patient @Sidebar
    Scenario Outline: Patient sidebar- Checking the functionality of sidebar when patient logs in
        Given user logs in with "<Role>" credentials
        And user navigates to the "<Page Type>" page
        When user clicks on the "<Item>" field
        Then the corresponding page appears with the expected elements: "<Element>"
        Examples:
            | Role    | Page Type | Item             | Element                            |
            | Patient | Homepage  | Doctors          | 20+ Specialities,100+ Doctors      |
            | Patient | Homepage  | Specialities     | 20+ Specialities                   |
            | Patient | Homepage  | My Appointments  | My Appointments                    |
            | Patient | Homepage  | Account Settings | My Profile,Name,Phone Number,Email |

    # //------------------------------------------------------------------------------------------------------------

    @SIFU003 @MYD-336 @Regression @NotAutomated @Patient @Sidebar
    Scenario Outline: Patient sidebar- Checking the functionality of account settings
        Given user logs in with "<Role>" credentials
        And user navigates to the "<Page Type>" page
        When user clicks on the "<Item>" field
        And user clicks on the "<Sub Item>" field
        Then the corresponding page appears with the expected elements: "<Element>"
        Examples:
            | Role    | Page Type | Item             | Sub Item        | Element                                                |
            | Patient | Homepage  | Account Settings | Change Password | Change Password,A lowercase letter,An uppercase letter |

    # //----------------------------------------------------------------------------------------------------------------

    @SIFU004 @MYD-336 @Regression @NotAutomated @Doctor @Sidebar
    Scenario Outline: Doctor sidebar- Checking the functionality of sidebar When doctor logs in
        Given user logs in with "<Role>" credentials
        And user navigates to the "<Page Type>" page
        When user clicks on the "<Item>" field
        Then the corresponding page appears with the expected elements: "<Element>"
        Examples:
            | Role   | Page Type | Item           | Element                                                            |
            | Doctor | Homepage  | Dashboard      | Completed Appointments,Cancelled Appointments,Total Patients,Slots |
            | Doctor | Homepage  | Appointments   | My Appointments                                                    |
            | Doctor | Homepage  | Doctor Profile | My Profile,Consultation Fee,Name,Email                             |

    # //------------------------------------------------------------------------------------------------------------------------

    @SIFU005 @MYD-336 @Regression @NotAutomated @Doctor @Sidebar
    Scenario Outline: Doctor sidebar- Checking the functionality of doctor profile
        Given user logs in with "<Role>" credentials
        And user navigates to the "<Page Type>" page
        When user clicks on the "<Item>" field
        And user clicks on the "<Sub Item>" field
        Then the corresponding page appears with the expected elements: "<Element>"
        Examples:
            | Role   | Page Type | Item           | Sub Item       | Element                                      |
            | Doctor | Homepage  | Doctor Profile | Qualifications | My Qualifications                            |
            | Doctor | Homepage  | Doctor Profile | Experience     | My Experience,Licence Number,Speciality(ies) |


