# HyperText Markup Language

## Introduction

Le **HTML (HyperText Markup Language)** est le langage de balisage standard utilisé pour structurer le contenu d'un site web. Il permet de définir la structure et les différents éléments d'une page web, tels que les titres, les paragraphes, les images, les liens, et bien plus encore. HTML constitue la base de tout projet de développement web et fonctionne en collaboration avec d'autres technologies comme le CSS pour le design et le JavaScript pour l'interactivité.


## Structure de Base d'une Page HTML

Une page HTML suit une structure hiérarchique avec des éléments obligatoires. <br>
Voici un exemple minimaliste :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Première Page HTML</title>
</head>
<body>
    <h1>Bienvenue dans le monde du HTML</h1>
    <p>Ceci est mon premier paragraphe.</p>
</body>
</html>
```

- `<!DOCTYPE html>` : Indique que le document utilise la version HTML5.
- `<html>` : L'élément racine qui contient tout le contenu de la page.
- `<head>` : Contient les métadonnées de la page (titre, encodage, etc.).
- `<body>` : Contient le contenu visible de la page.


## Balises HTML Principales

### Balises de Structure

- **Titres** : `<h1>` à `<h6>` pour définir des titres.
  ```html
  <h1>Titre Principal</h1>
  <h2>Sous-titre</h2>
  ```

- **Paragraphes** : `<p>` sert à créer des paragraphes.
  ```html
  <p>Ceci est un paragraphe.</p>
  ```

- **Divisions** : `<div>` permet de regrouper des éléments.
  ```html
  <div>
      <h2>Titre dans une division</h2>
      <p>Paragraphe dans une division.</p>
  </div>
  ```

### Balises pour le Texte

- **Mise en emphase** :
  ```html
  <strong>Texte en gras</strong>
  <em>Texte en italique</em>
  ```

- **Listes** :
  - Liste à puces :
    ```html
    <ul>
        <li>Premier élément</li>
        <li>Deuxième élément</li>
    </ul>
    ```
  - Liste ordonnée :
    ```html
    <ol>
        <li>Premier élément</li>
        <li>Deuxième élément</li>
    </ol>
    ```

### Liens et Images

- **Liens** :
  ```html
  <a href="https://www.example.com">Cliquez ici</a>
  ```

- **Images** :
  ```html
  <img src="chemin/vers/image.jpg" alt="Description de l'image">
  ```

## Page HTML Complète

Voici un exemple de page web combinant plusieurs éléments HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple de Page HTML</title>
</head>
<body>
    <header>
        <h1>Bienvenue sur Mon Site</h1>
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>À propos de nous</h2>
            <p>Nous sommes une entreprise spécialisée dans le développement web.</p>
        </section>

        <section>
            <h2>Nos Services</h2>
            <ul>
                <li>Développement de sites web</li>
                <li>Création d'applications mobiles</li>
                <li>Consulting en technologies</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Mon Site. Tous droits réservés.</p>
    </footer>
</body>
</html>
```
