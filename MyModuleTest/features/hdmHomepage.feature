Feature: Example feature
  As a student of mobile media
  I should be able to read the contact page
  to get information about teachers, staffs and laboratories

  Scenario: Go to the contact page
    Given Actor is "Paul"
    And She goes on the website "http://www.hdm-stuttgart.de/"
    When Enter "Hab Dich" into textfield with id "suchbegriff"
    Then She should see "Hochschule der Medien (HdM) - Studieren. Wissen. Machen." in the title