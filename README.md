# Feature test : add a customizable gift in the basket

# Construction du repo : 
1. 1er commit avec le projet initialisé et fonctionnel 
2. 1 branche pour : 
- Le POM
- Les steps gherkin
- Leurs implémentations

## Résumé des TODO : 
1. S'assurer que le panier est vide au début du test 
2. Finir la page object pour le login
3. Elargir le scénario de test dans les cas où : 
- Mauvais login ou mot de passe
- Si on a oublié le mot de passe
- Si on souhaite ajouter un compte
- Vérifier la confirormité des customisations (toutes présentes, les bonnes polices etc)


## Problèmes rencontrés : 
1. De façon aléatoire cypress plante et affiche une erreur "SIGTRAP", investigation en cours
2. Au moment d'écrire dans le champs de personnalisation du cadeau, parfois le sélecteur ne fonctionne pas
=> ajouter un wait ou un autre moyen d'attendre que le popover soit bien chargé, j'ai placé un wait en attendant
3. Vérification de l'ajout au panier du cadeau : il met un peu de temps à se mettre à jour donc mêmes remarque que le point précédent

## Commentaires
1. Concernant le scénario : 
- Je propose soit une liste d'objets personnalisable à sélectionner au hasard, soit une requête remontant un article personnalisable et en stock, toujours de façon aléatoire
- Cela rendra le test plus déterministe et donc moins prompt à donner de faux négatifs
2. Concernant la structure du repo : 
- Je suis toujours en réflexion sur le choix d'utiliser le POM et cucumber selon les types de tests, j'ai ici implémenté les deux pour l'exercice 