# TP1 - Rainbow

## I - Les bases

### 1 - Code exemple

* Créer un dossier _my-git-repo_
* Ajouter un fichier _index.html_
* Ajouter le contenu suivant:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>A Colorful Website</title>
  <meta charset="utf-8" />
</head>
<body>
  <h1 style="color: #07F">A Colorful Website</h1>
  <p>This is a website about color!</p>    
  
  <h2 style="color: #C00">News</h2>
  <ul>
    <li>Nothing going on (yet)</li>
  </ul>
</body>
</html>
```

### 2 - Premières commandes

* Initialiser le dossier en un dossier Git ([Lien vers le cours](/modules/vcs/commit.html))

* 🖊️ Exécuter la commande ```git status``` avant et après l'ajout du fichier index.html à l'index

* Effectuer votre premier _commit_

* 🖊️ Visualiser le détail du commit

## 3 - Nouveaux fichiers HTML

* Créer les fichier orange.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>The Orange Page</title>
  <meta charset="utf-8" />
</head>
<body>
  <h1 style="color: #F90">The Orange Page</h1>
  <p>Orange is so great it has a
  <span style="color: #F90">fruit</span> named after it.</p>
</body>
</html>
````

et blue.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>The Blue Page</title>
  <meta charset="utf-8" />
</head>
<body>
  <h1 style="color: #00F">The Blue Page</h1>
  <p>Blue is the color of the sky.</p>
</body>
</html>
```

* La création de ces fichiers nécessites un nouveau commit avec pour message _Create blue and orange pages_

### 4 - Modifications des fichiers

* Modifier index.html en ajoutant le contenu suivant avant la balise ```</body>```

```html
<h2>Navigation</h2>
<ul>
  <li style="color: #F90">
    <a href="orange.html">The Orange Page</a>
  </li>
  <li style="color: #00F">
    <a href="blue.html">The Blue Page</a>
  </li>
</ul>
```

* Ajouter le lien suivant à orange.html et blue.html 
```html
<p><a href="index.html">Return to home page</a></p>
```

* Le message corespondant à cette modification sera _Add navigation links_, exécuter les commandes nécessaires

* 🖊️ Exécuter ```git log --oneline```


## II - Revenir à un état antérieur

### 1 - Git revert

* Utiliser la commande checkout pour revenir à l'état du commit avec pour message _Create blue and orange pages_

* 🖊️ Exécuter la commande ```git status```

* Revenir à la version la plus récente et la tager en _v1.0_ avec le message _Stable version of the website_

* Créer un fichier poc.html avec le contenu suivant

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Proof of concept</title>
  <meta charset="utf-8" />
</head>
<body>
  <h1>Proof of concept</h1>
  <p>We're trying out a <span style="color: #F0F">proof of</span>
  <span style="color: #06C">concept</span>!</p>
    
  <p><a href="index.html">Return to home page</a></p>
</body>
</html>
```

* Commiter avec le message _Add a poc_

* 🖊️ Exécuter ```git log --oneline```

* Restaurer la version stable en " supprimant " le commit le plus récent

* 🖊️ Exécuter ```git log --oneline```

### 2 - Git reset

* Créer un fichier vide.html et le laisser vide

* Ajouter un lien dans la section "Navigation" de _index.html_

* 🖊️ Exécuter la commande ```git status```

Nous avons un fichier suivi et un fichier non suivi à modifier.<br/>

* Pour restaurer index.html à l'état du dernier commit, exécuter ```git reset --hard```
* Pour supprimer vide.html, exécuter ```git clean -f```

* 🖊️ Exécuter la commande ```git status```

## III - Manipuler les branches

### 1 - La branche POC

* 🖊️ Lister les branches du projet

* 🖊️ Exécuter ```git log --oneline```

* Utiliser ```git checkout``` pour se placer sur le commit _Add a poc_

* Créer une nouvelle branche _poc_ et se placer dessus

* Modifier le fichier poc.html avec le contenu suivant :
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Proof of concept</title>
  <meta charset="utf-8" />
</head>
<body>
  <h1>Proof of concept</h1>
  <p>Look! A Rainbow!</p>

  <ul>
    <li style="color: red">Red</li>
    <li style="color: orange">Orange</li>
    <li style="color: yellow">Yellow</li>
    <li style="color: green">Green</li>
    <li style="color: blue">Blue</li>
    <li style="color: indigo">Indigo</li>
    <li style="color: violet">Violet</li>
  </ul>
    
  <p><a href="index.html">Return to home page</a></p>
</body>
</html>
```

* Commiter avec le message _Add a rainbow to poc.html_

* Renommer poc.html en rainbow.html

* 🖊️ Exécuter la commande ```git status```

* Exécuter la commande permettant d'arrêter de suivre poc.html

* 🖊️ Exécuter la commande ```git status```

* Commiter avec le message _Rename poc.html to rainbow.html_

* 🖊️ Exécuter ```git log --oneline```

* Revenir sur la branche main

### 2 - La branche CSS

* Créer une branche _css_ et se positionner dessus

* Créer le fichier style.css avec le contenu suivant :

```css
body {
  padding: 20px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #111;
}

p, ul {
  margin-bottom: 10px;
}

ul {
  margin-left: 20px;
}
```

* Commiter avec le message _Add CSS stylesheet_

* Ajouter la ligne suivante après la balise ```<title>``` dans les fichiers, index.html, blue.html et orange.html
```html
<link rel="stylesheet" href="style.css" />
```

* Commiter avec le message _Link HTML pages to stylesheet_

* 🖊️ Revenir sur la branch main et fusionner la branche _css_ avec celle-ci

* 🖊️ Exécuter ```git log --oneline```

* Supprimer la branche _css_

### 3 - Poursuite du POC

* Se placer sur la branche _poc_ et fusionner avec _main_

* Résoudre le conflit en conservant ```<title>Proof of concept</title>```

* Ajouter une balise ```<link rel="stylesheet" href="style.css" />``` dans le fichier rainbow.html

* Commiter avec le message _Add CSS stylesheet to rainbow.html_

* Ajouter un lien vers rainbow.html dans le fichier index.html

* Commiter avec le message _Link index.html to rainbow.html_

* 🖊️ Exécuter ```git log --oneline```

### 4 - Un arc-en-ciel alternatif

* Créer une branche _poc-alt_ et se placer dessus

* Modifier rainbow.html avec le contenu suivant :

```html
<div style="background-color: red"></div>
<div style="background-color: orange"></div>
<div style="background-color: yellow"></div>
<div style="background-color: green"></div>
<div style="background-color: blue"></div>
<div style="background-color: indigo"></div>
<div style="background-color: violet"></div>
```

* Ajouter le contenu suivant avant ```</head>```

```html
<style>
  div {
    width: 300px;
    height: 50px;
  }
</style>
```

* Commiter avec le message _Make a real rainbow_

### 5 - Le hotfix

* Se placer sur la branche main

* Créer et se placer sur une branche _news-hotfix_

* Modifier les "News" de index.html avec le contenu suivant :
```html
<h2 style="color: #C00">News</h2>
<ul>
  <li><a href="news-1.html">Blue Is The New Hue</a></li>
</ul>
```

* Créer le fichier news-1.html avec le contenu suivant :
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Blue Is The New Hue</title>
  <link rel="stylesheet" href="style.css" />
  <meta charset="utf-8" />
</head>
<body>
  <h1 style="color: #079">Blue Is The New Hue</h1>
  <p>European designers have just announced that
  <span style="color: #079">Blue</span> will be this year's
  hot color.</p>
    
  <p><a href="index.html">Return to home page</a></p>
</body>
</html>
```

* Commiter avec le message _Add 1st news item_

* 🖊️  Fusionner le contenu de _news-hotfix_ dans _main_

* Supprimer la branche _news-hotfix_

### 5 - Fin du poc

* Se placer sur la branche _poc_

* Modifier index.html avec le contenu suivant :
```html
<h2 style="color: #C00">News</h2>
<ul>
  <li><a href="rainbow.html">Our New Rainbow</a></li>
</ul>
```

* Commiter avec le message "Add news item for rainbow"

* 🖊️ Exécuter ```git log --oneline```

* Fusionner le contenu de _poc_ dans _main_

* Pour résoudre le conflit, éditer index.html avec le contenu suivant :
```html
<h2 style="color: #C00">News</h2>
<ul>
  <li><a href="news-1.html">Blue Is The New Hue</a></li>
  <li><a href="rainbow.html">Our New Rainbow</a></li>
</ul>
```

* Effectuer le commit

* Supprimer les branches _poc_ et _poc-alt_ (```git branch -D poc-alt``` permet de supprimer malgré les modifications non fusionnées)

## IV - Rebasing

### 1 - Section à propos

* Créer et se positionner sur une branche _about_

* Créer un dossier _about_ contenant un fichier index.html vide

* Commiter avec le message _Add empty page in about section_

* Ajouter le contenu suivant dans _about/index.html_
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>About Us</title>
  <link rel="stylesheet" href="../style.css" />
  <meta charset="utf-8" />
</head>
<body>
  <h1>About Us</h1>
  <p>We're a small, colorful website with just two employees:</p>

  <ul>
    <li><a href="me.html">Me: The Developer</a></li>
    <li><a href="mary.html">Mary: The Graphic Designer</a></li>
  </ul>
    
  <p><a href="../index.html">Return to home page</a></p>
</body>
</html>
```

* Commiter avec le message _Add contents to about page_

### 2 - Hotfix

Nous allons à nouveau travailler sur un _hotfix_ nous obligeant à mettre notre développement de côté.

* Basculer sur la branche _main_

* Créer une branche _news-hotfix_ et se positionner dessus (⚠️ Si vous êtes encore dans le dossier _about_, celui-ci n'existe pas dans la branche _main_)

* 🖊️ Lister les branches

* Modifier la section _News_ de index.html avec le contenu suivant
```html
<h2 style="color: #C00">News</h2>
<ul>
  <li><a href="news-1.html">Blue Is The New Hue</a></li>
  <li><a href="rainbow.html">Our New Rainbow</a></li>
  <li><a href="news-2.html">A Red Rebellion</a></li>
</ul>
```

* Commiter avec le message _Add 2nd news item to index page_

* Créer le fichier news-2.html avec le contenu suivant
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>A Red Rebellion</title>
  <link rel="stylesheet" href="style.css" />
  <meta charset="utf-8" />
</head>
<body>
  <h1 style="color: #C03">A Red Rebellion</h1>
    
  <p>Earlier today, several American design firms
  announced that they have completely rejected the use
  of blue in any commercial ventures. They have
  opted instead for <span style="color: #C03">Red</span>.</p>
    
  <p><a href="index.html">Return to home page</a></p>
</body>
</html>
```

* Commiter avec le message _Add article for 2nd news item_

Nous avons terminé notre hotfix, nous allons maintenant intégrer notre correctif à la branche principale.

* 🖊️ Basculer sur la branche _main_ et fusionner _news-hotfix_

* Supprimer la branche _news-hotfix_

Nous voulons récupérer les modifications de la branche _main_ dans notre branche de développement.<br/>
Cette fois-ci, nous utilisons _rebase_ à la place de _merge_

* Basculer sur la branche _about_

* 🖊️ Exécuter ```git rebase main``` puis  ```git log --oneline```

### 3 - Page nous

* Créer un fichier about/me.html avec le contenu suivant 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>About Me</title>
  <link rel="stylesheet" href="../style.css" />
  <meta charset="utf-8" />
</head>
<body>
  <h1>About Me</h1>
  <p>I'm a big nerd.</p>

  <h2>Interests</h2>
  <ul>
    <li>Computers</li>
    <li>Mathematics</li>
    <li>Typography</li>
  </ul>

  <p><a href="index.html">Return to about page</a></p>
</body>
</html>
```

* Commiter avec le message _Add HTML page for personal bio_

* 🖊️ Exécuter ```git log --oneline```

* Créer un fichier vide about/mary.html et commiter avec le message _Add empty HTML page for Mary's bio_

* Ajouter une section _Navigation_ à my-git-repo/index.html avec le contenu suivant :
```html
<h2>Navigation</h2>
<ul>
  <li>
    <a href="about/index.html">About Us</a>
  </li>
  <li style="color: #F90">
    <a href="orange.html">The Orange Page</a>
  </li>
  <li style="color: #00F">
    <a href="blue.html">The Blue Page</a>
  </li>
  <li>
    <a href="rainbow.html">The Rainbow Page</a>
  </li>
</ul>
```

* Commiter avec le message _Add link to about section in home page_

Nous allons maintenant nettoyer l'historique des commits avant de _merger_ notre feature dans notre branche principale.<br/>
Pour cela, nous allons utiliser un _interactive rebase_.

* Exécuter ```git rebase -i main``` et modifier la liste tel que dans l'exemple suivant
```txt
pick xxxxxxx Add empty page in about section
squash xxxxxxx Add contents to about page
pick xxxxxxx Add HTML page for personal bio
squash xxxxxxx Add empty HTML page for Mary's bio
pick xxxxxxx Add link to about section in home page
```

Ici, nous utilisons la commande _squash_ pour condenser les petits commits, cohérents entre eux, un un seul.

* 🖊️ Exécuter ```git log --oneline```

Nous pouvons observer que les 5 commits présents à l'origine dans _about_ ont été condensé en 3, et 2 d'entre eux ont un nouveau message.<br/>
Aussi, les commit ID sont différents.<br/><br/>

L'_interactive rebasing_ nous permet d'aller encore plus loin.<br/> 
Lorsque Git déplace un commit vers une nouvelle base, nous pouvons modifier l'index avant de le _commiter_.

* Exécuter à nouveau ```git rebase -i main``` et indiquer que nous souhaitons editer avant le second commit.
```txt
pick 58dec2a Create the about page
edit 6ac8a9f Begin creating bio pages
pick 51c958c Add link to about section in home page
```

* Editer about/mary.html en intégrant le contenu ```[Mary, please update your bio!]```

Nous sommes actuellement entre deux commits dans un rebase.<br/>

* 🖊️  Exécuter les commandes suivantes
```sh
git add about/mary.html
git status
git commit --amend  # --amend indique à git d'utiliser le commit existant au lieu d'en créer un nouveau
```

* 🖊️ Pour indiquer à Git que nous avons terminé nos modifications et qu'il peut terminer le rebase, nous utilison la commande suivante : 
```sh
git rebase --continue  # --abort permet d'annuler
```

* 🖊️ Exécuter ```git log --oneline```

Nous allons maintenant conclure le développement de notre feature :

* Basculer sur la branche _main_

* 🖊️ Exécuter ```git log --oneline```

* Fusionner la branche _about_

* 🖊️ Exécuter ```git log --oneline```

* Supprimer la branche _about_