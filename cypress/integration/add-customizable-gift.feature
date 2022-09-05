Feature: Add a customizable gift un my cart

    As a client connected, I want to add in my cart a gift after having customized it
    
    Background: I am logged in my account
      Given I visit the homepage 
      When I am logged in with heyothmane
      Then I check I am logged in as heyothmane
      # TODO : And I have an empty cart

    Scenario: I want to add a customized gift in my cart
      Given I type "B09LHHYCLR" in the searchbar
      When I submit the search
      Then I can see results
      And I click on "BEFADA Bijoux personnalisés prénom femme, accessoires de bracelet en acier inoxydable" gift

      Given I click on the customize button
      # When I choose a random police
      Then I type "MaBiche" in the custom text field
      And I add the gift to the basket 
      And I can see the basket updated with 1 articles