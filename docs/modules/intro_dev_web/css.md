# Cascading Style Sheets

## Introduction

Le **CSS (Cascading Style Sheets)** est un langage de style utilisé pour décrire l'apparence et le formatage d'un document HTML. Tandis que le HTML définit la structure d'une page web, le CSS permet de contrôler la mise en page, les couleurs, les polices, les marges et bien plus encore, offrant ainsi une expérience utilisateur attrayante et cohérente.


## Syntaxe du CSS

Un règle CSS est composée d'un sélecteur et d'un bloc de déclarations :

```css
sélecteur {
    propriété: valeur;
}
```

### Exemple :

```css
h1 {
    color: blue; /* Change la couleur du texte en bleu */
    font-size: 24px; /* Définit la taille de la police à 24 pixels */
}
```

## Intégrer le CSS

### En Ligne
Directement dans l'attribut `style` d'un élément HTML.

```html
<p style="color: red;">Texte rouge</p>
```

### Dans le head
Dans une balise `<style>` dans le `<head>` du document HTML.

```html
<style>
    p {
        color: green;
    }
</style>
```

### Dans un fichier externe
Dans un fichier séparé avec une extension `.css`.

Fichier `styles.css` :

```css
body {
    background-color: lightgray;
}
```

Lien dans le fichier HTML :

```html
<link rel="stylesheet" href="styles.css">
```

## Sélecteurs CSS

Les sélecteurs permettent de cibler des éléments spécifiques pour leur appliquer des styles.

### Sélecteurs de Base

- **Sélecteur de type** : Cible les balises HTML.
  ```css
  h1 {
      color: blue;
  }
  ```

- **Sélecteur de classe** : Préfixé par un `.` et appliqué via l'attribut `class`.
  ```css
  .highlight {
      background-color: yellow;
  }
  ```

  ```html
  <p class="highlight">Texte surligné</p>
  ```

- **Sélecteur d'identifiant** : Préfixé par un `#` et appliqué via l'attribut `id`.
  ```css
  #main {
      font-weight: bold;
  }
  ```

  ```html
  <div id="main">Contenu principal</div>
  ```

### Sélecteurs Combinés

- **Descendants** : Cible les éléments imbriqués.
  ```css
  div p {
      color: red;
  }
  ```

- **Groupes** : Applique le même style à plusieurs éléments.
  ```css
  h1, h2, h3 {
      font-family: Arial, sans-serif;
  }
  ```

## Propriétés CSS Essentielles

### Couleurs et Arrière-plans

- **Couleur du texte** :
  ```css
  color: blue;
  ```

- **Arrière-plan** :
  ```css
  background-color: lightblue;
  ```

- **Image d'arrière-plan** :
  ```css
  background-image: url('image.jpg');
  ```

### Polices et Texte

- **Police** :
  ```css
  font-family: 'Arial', sans-serif;
  ```

- **Taille de police** :
  ```css
  font-size: 16px;
  ```

- **Alignement du texte** :
  ```css
  text-align: center;
  ```

### Marges et Espacements

- **Marge externe** :
  ```css
  margin: 20px;
  ```

- **Marge interne (padding)** :
  ```css
  padding: 10px;
  ```


## Techniques de Mise en Page Moderne

### Flexbox

Flexbox permet de créer des mises en page flexibles et adaptatives.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Grid

Grid est une méthode puissante pour créer des grilles complexes.

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
```


## Exemple Complet

Voici un exemple combinant plusieurs notions CSS :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple CSS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
        }

        .container {
            display: flex;
            justify-content: space-around;
            margin: 20px;
        }

        .box {
            width: 200px;
            height: 100px;
            background-color: lightblue;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bienvenue sur mon site</h1>
    </header>

    <div class="container">
        <div class="box">Boîte 1</div>
        <div class="box">Boîte 2</div>
        <div class="box">Boîte 3</div>
    </div>
</body>
</html>
```