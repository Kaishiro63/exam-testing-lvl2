# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?
   - B) Vérifier le comportement d'une unité de code isolée

### Utilisation de Gherkin
Gherkin est principalement utilisé pour :
   - B) Décrire le comportement attendu dans un format compréhensible par tous

### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.
Ça consiste à tester du code indépendament d'autre composant ou autres dépendances externes. C'est important parce que ça permet de voir plus précisement en cas d'echec d'où peut venir le problème, les tests sont plus rapide à lancer.

### Origine du BDD
Le BDD est une extension du :
   - B) Test Driven Development

### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :
   - B) L'interaction entre différents composants ou modules

### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.
La structure d'un scénario Gherkin c'est de décrire le contexte ou la situation de départ, décrire l'action ou l'événement déclencheur et décrire le résultat attendu.

Feature: Connexion à l'application
Scenario: Connexion avec des identifiants valides
Given je suis sur la page de connexion
When je saisis un email et un mot de passe valides
Then je devrais être redirigé vers la page d'accueil

### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?
   - B) Des objets qui simulent le comportement de dépendances réelles

### Objectif des tests end-to-end
Les tests end-to-end visent à :
   - B) Tester l'application de bout en bout du point de vue de l'utilisateur

### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.
Le but est de dévélopper un test unitaire qui échouera car la fonction testé n'est pas encore développé, un fois le test fait on va développer la fonction en faisant le minimum pour faire valider le test puis on va refactoriser le code pour qu'il soit le plus optimiser possible en validant toujours le test

### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?
    - B) Il doit être rapide à exécuter, isolé et répétable

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?
    - C) Feature, Scenario, Given, When, Then

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?
La différence entre ces deux tests c'est que le test unitaire va permettre de tester un bout de code isolé alors que le test d'intégration va permettre de tester un ensemble de code, pour vérifier que l'interaction entre plusieurs composant fonctionne bien.
Dans les tests unitaires on va se servir de mock alors que pour un test d'intégration on va réelement se servir des dépendance externe pour tester le tout.

### Nom du cycle TDD
Le cycle TDD classique est connu sous le nom de :
    - B) Red-Green-Refactor

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :
    - C) Le comportement du système par rapport aux spécifications

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?
Il peut améliorer la communication entre les équipes technique et les équipe métier car les scénario sont écrits en langage non technique donc tout le monde peut facilement comprendre les attendus

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?
    - C) Il favorise un design modulaire et des interfaces claires

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?
Les tests end-to-end permettent de testé le parcours complet d'un utilisateur, donc vient valider l'ensemble des composant qui interragissent entre eux. En terme de difficulté, ces tests sont lents, coûteux et difficiles à débuguer

### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?
    - B) Étant donné-Quand-Alors

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.
Les tests unitaires permettent de détecter tôt les bugs, facilitent la maintenance et garantissent la fiabilité des composants, mais ils ne testent que des unités isolées et ne valident pas les interactions entre composants ni l'interface utilisateur.

### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?
    - B) Background

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?
    - C) Les développeurs et les testeurs QA

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?
    - C) Après avoir exécuté les tests et constaté leur échec

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?
    - C) Playwright

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?
Le BDD se concentre sur la collaboration entre les équipes pour défninir au mieux le comportement du système, alors que le TDD se concentre sur l'écriture de test unitaire avant de développer pour tester le code. 

### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?
    - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?
    - B) Il doit simuler avec précision le comportement réel des utilisateurs

### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?
Ça demande de la rigueur, plus de temps de développement. Il faut le mettre en place progressivement, montrer les avantages à long terme

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?
    - C) Selenium

### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?
    - D) Développeurs, testeurs, product owners et parties prenantes métier

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?
Il faut se concentrer sur les tests essentiels, les mettre à jour après chaque changement, utiliser des outils comme Playwright

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?
    - B) Ils sont généralement lents et coûteux à exécuter

### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?
Pour intégrer Gherkin dans un processus agile, on définit des scénarios compréhensibles par tous, puis les transforme en tests automatisés. Ça améliore la communication entre les équipes, assure que les spécifications sont claires, facilite les tests automatisés et permet un feedback rapide sur les fonctionnalités

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?
    - D) Écrire tous les tests à la fin du développement

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?
Les tests fonctionnels valident le comportement global de l'application par rapport aux spécifications. L'objectif des tests fonctionnels est de s'assurer que l'application fonctionne comme prévu pour l'utilisateur

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?
    - B) Specification By Example

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.
J'organise les tests fonctionnels en identifiant les fonctionnalités clés (panier, paiement, recherche), en créant des scénarios utilisateurs

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?
    - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E

### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?
Des tests unitaires pour la logique métier, des tests d'intégration pour valider les interactions entre composants, des tests fonctionnels pour s'assurer que l'application répond aux spécifications, et des tests end-to-end pour simuler des scénarios réels

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)
Tester trop de choses dans un seul test, le test devient long, difficile à comprendre et à déboguer. Il faut découper les scénarios en plusieurs tests ciblés