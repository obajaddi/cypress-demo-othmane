Feature: Add a customizable gift un my cart

    As a client connected, I want to add in my cart a gift after having customized it
    
    Background: I am logged in my account
      Given I visit the homepage 
      When I am logged in with heyothmane
      And I check I am logged in as heyothmane
      # TODO : And I have an empty cart

    Scenario: I want to add a customized gift in my cart
      Given I type "BEFADA Bijoux personnalisés prénom femme" in the searchbar
      When I submit the search
      Then I can see results
      And I click on the first result