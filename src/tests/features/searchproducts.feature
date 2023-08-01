Feature: Search Products
    As a user I want to search the products
    for purchase

    Background:
        Given A user has landed user credential page
        Then verify the URL of the Login page

    Scenario Outline: Login to Account and Search Products
            And the user enters "<username>" in the Login field
            And the user enters "<password>" in the password field
            And the user clicks the Login button
        Then the login should be success

        Examples:

            | username         | password      |
            | gkmram@gmail.com | Ramkrishna93$ |
            | mno@gmail.com    | mno1234       |