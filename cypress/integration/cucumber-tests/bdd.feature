Feature: Registratios

    
    Scenario: Input valid data
    Given I open home page
    When I fill form with valid data
    And I click send
    And I close popup
    And I check table for a new record
    Then I delete new record

    Scenario Outline: Verifying empty input validation
    Given I open home page
    And I click send and see <name_empty_alert> alert
    When I fill valid name
    When I click send
    And I click send and see <last_name_empty_alert> alert
    When I fill valid last name
    And I click send and see <date_empty_alert> alert
    When I fill valid date
    And I click send and see <email_empty_alert> alert
    And I fill valid email
    And I click send and see <password_empty_alert> alert
    And I fill valid password
    And I click send
    And I close popup
    Then I check table data

    Examples:
        | name_empty_alert | last_name_empty_alert | date_empty_alert |  email_empty_alert  | password_empty_alert |
        | 'Name must be filled out' | 'Last name must be filled out' | 'Date must be filled out' |  'Email must be filled out'  | 'Password must be filled out' |


Scenario Outline: Inpud invalid data
    Given I open home page
    When I fill invalid name
    And I click send and see <name_alert> alert
    When I fill valid name
    And I fill invalid last name
    And I click send and see <last_name_alert> alert
    When I fill valid last name
    And I fill invalid date
    And I click send and see <date_alert> alert
    When I fill valid date
    And I fill invalid email
    And I click send and see <email_alert> alert
    And I fill valid email
    And I fill invalid password
    And I click send and see <password_alert> alert
    And I fill valid password
    And I click send
    And I close popup
    Then I check table data

    Examples:
        | name_alert | last_name_alert | date_alert |  email_alert  | password_alert |
        | 'First Name should contain only Alphabet characters (A-Z or a-z)' | 'Last Name should contain only Alphabet characters (A-Z or a-z)' | 'Birthday cannot be more than today!' |  'Bad Email format'  | 'A password is correct if it contains at least 1: uppercase character,lowercase character, digit, special character and Minimum 8 characters'|