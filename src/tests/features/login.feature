Feature: Login Lambda Test
    As a user I want to enter the Login user Id and Password
    in the respective fields
    and navigating to Account Details page by clicking Login Button

    Background:
        Given A user has landed user credential page
        Then verify the URL of the Login page

    Scenario: Login should be success
            And the user enters "gkmram@gmail.com" in the Login field
            And the user enters "Ramkrishna93$" in the password field
            And the user clicks the Login button
        Then the login should be success

    Scenario: Login should be failed
            And the user enters "gkmram" in the Login field
            And the user enters "Ramkrishna93$" in the password field
            And the user clicks the Login button
But the login should be failed