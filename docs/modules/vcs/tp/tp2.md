# TP - Projet collaboratif en HTML/CSS

## Objectifs :
- Comprendre et utiliser Git en environnement collaboratif.
- Gérer les branches, les fusions (merge), et résoudre les conflits.
- Manipuler un dépôt distant sur GitHub ou GitLab.
- Découvrir les bases de HTML et CSS.
- Collaborer efficacement en groupe sur un projet web simple.

#### Durée : 4 heures  
Groupes : 4 étudiants par groupe

## Scénario

Les étudiants devront créer une petite page web pour un site fictif d’une startup, **TechInnov**, présentant une technologie ou un produit innovant. Chaque groupe devra collaborer pour mettre en place le site suivant les étapes et consignes ci-dessous, tout en utilisant Git pour gérer le versioning du code.

#### Partie 1 : Initialisation et introduction à Git (30 min)
1. **Création d’un dépôt Git local :**  
   Chaque groupe choisira un responsable qui créera un nouveau dépôt Git sur sa machine locale.
2. **Initialisation du dépôt distant :**  
   Le responsable doit initialiser un dépôt sur GitHub ou GitLab et y pousser le projet vide.
3. **Clonage du dépôt :**  
   Les autres membres du groupe devront cloner le dépôt distant sur leurs machines locales.

#### Partie 2 : Création de la structure de base en HTML (45 min)
1. **Brancher sur une nouvelle branche :**  
   Chaque étudiant devra créer une branche dédiée à une section de la page :
   - Étudiant 1 : création du fichier `index.html` avec la structure de base (balises HTML, titre).
   - Étudiant 2 : ajout de la section d’en-tête avec le nom de l'entreprise et un slogan.
   - Étudiant 3 : ajout d'une section pour présenter la technologie ou le produit.
   - Étudiant 4 : ajout d'une section contact avec un formulaire simple (nom, email, message).

2. **Push et Merge :**  
   Chaque étudiant devra :
   - Pousser sa branche sur le dépôt distant.
   - Créer une Pull Request (PR) et proposer la fusion (merge) sur la branche principale.
   - L’un des étudiants, désigné responsable, validera et fusionnera chaque branche dans la branche principale.

#### Partie 3 : Introduction au CSS (45 min)
1. **Création du fichier CSS :**
   - Étudiant 1 : création du fichier `style.css` et ajout des règles de style de base (police, taille de texte).
   - Étudiant 2 : stylisation de l'en-tête (couleur de fond, style du texte).
   - Étudiant 3 : mise en forme de la section technologie/produit (bordures, marges).
   - Étudiant 4 : stylisation du formulaire (positionnement des champs, boutons).

2. **Gestion des branches et merge :**
   Chaque étudiant devra répéter les étapes de création de branche, push, PR et merge pour ajouter le CSS. Ils devront aussi résoudre les éventuels conflits de merge.

#### Partie 4 : Collaboration avancée et gestion des conflits (1h15)
1. **Modification simultanée :**
   Afin d'expérimenter la gestion des conflits, deux étudiants doivent travailler simultanément sur une même section du fichier HTML ou CSS (par exemple, modifier l’en-tête ou le style du formulaire).
   - Simulez un conflit en travaillant sur la même ligne de code dans différentes branches.
   - Apprenez à résoudre le conflit en choisissant les modifications à conserver.

2. **Pull Requests et revue de code :**
   - Chaque étudiant doit créer une Pull Request.
   - Les autres membres devront lire et approuver ou commenter les PRs avant la fusion.

#### Partie 5 : Finalisation et présentation du projet (30 min)
1. **Finalisation :**
   Chaque groupe devra s’assurer que leur page web est fonctionnelle et agréable à regarder. Ils peuvent ajouter des images, améliorer le design ou la structure en travaillant ensemble.
   
2. **Présentation du projet :**
   Chaque groupe présentera rapidement son projet, les étapes de développement, et les éventuels problèmes rencontrés (conflits Git, organisation du travail).


## Ressources :
- **Guide GitHub/GitLab** : [Lien vers documentation GitHub/GitLab](https://docs.github.com/fr)
- **Référence HTML** : [Lien vers la documentation HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- **Référence CSS** : [Lien vers la documentation CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps)

## Annexes

Pour aider la création de la page web en HTML et CSS.

### Annexe 1 : Exemple de structure HTML de base

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechInnov - Site de présentation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Bienvenue chez TechInnov</h1>
        <p>Votre partenaire pour des innovations technologiques.</p>
    </header>
    
    <section id="presentation">
        <h2>Notre Technologie</h2>
        <p>Chez TechInnov, nous développons des solutions révolutionnaires pour l’industrie de demain.</p>
    </section>
    
    <section id="contact">
        <h2>Contactez-nous</h2>
        <form action="#" method="post">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required><br>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required><br>

            <label for="message">Message :</label>
            <textarea id="message" name="message" required></textarea><br>

            <input type="submit" value="Envoyer">
        </form>
    </section>
</body>
</html>
```

### Annexe 2 : Exemple de fichier CSS basique

```css
/* Fichier : style.css */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 2.5em;
    margin: 0;
}

h2 {
    color: #333;
}

section {
    padding: 20px;
    margin: 10px auto;
    max-width: 800px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin: 10px 0 5px;
}

input, textarea {
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
}

input[type="submit"] {
    margin-top: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}
```