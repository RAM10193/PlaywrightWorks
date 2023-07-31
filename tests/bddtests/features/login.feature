Feature: Login Lambda Test
As a user I want to enter the Login user Id and Password 
in the respective fields 
and navigating to Account Details page by clicking Login Button

Scenario: Login to the Account Details page
    Given A user has landed user credential page
    When the user enters "gkmram@gmail.com" in the Login field
    Then the user enters "Ramkrishna93$" in the password field
    Then the user clicks the Login button

    