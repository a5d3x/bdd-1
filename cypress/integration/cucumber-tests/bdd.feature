Feature: Registration

    
    Scenario: Input valid data
    Given I open home page
    When I fill form with valid data
    And I click send
    And I close popup
    And I check table for a new record
    Then I delete new record

    
    Scenario Outline: Inpud invalid data
        Given I open home page
        When I focus <field_name>
        And I type the <data>
        Then I see that field is highlighted <field_color>
    Examples:
    |field_name|data|field_color|
    |'first_name'|'123'|'red'|
    |'last_name'|'@$```'|'red'|
    |'date_filed'|'2030-12-03'|'red'|
    |'email_filed'|'email@@email.com'|'red'|
    |'password_filed'|'qwerty123'|'red'|

 
    Scenario Outline: Verifying empty input validation
        Given I open home page
        When I fill form with valid data
        And I clear the <field_name> field
        Then I click send to see <alert> alert
    Examples:
    |field_name|alert|
    |'first_name'|'Name must be filled out'|
    |'last_name'|'Last name must be filled out'|
    |'date_filed'|'Date must be filled out' |
    |'email_filed'|'Email must be filled out'|
    |'password_filed'|'Password must be filled out'|

   