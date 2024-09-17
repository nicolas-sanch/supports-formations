# Initialisation et commit

Pour créer un dépôt local:
```sh
mkdir mon-dossier
cd mon-dossier
git init # Initialise un nouveau dépôt dans le répertoire courant
code .   # Pour ouvrir notre IDE
```

~~Git créer par défaut une branche _master_~~ <br/>
Le contenu du dépôt est hébergé dans le dossier _.git_ généré<br/>

Nous pouvons visualiser son contenu avec la commande ```ls -la .git```

### 
```git status``` permet de visualiser l'état des fichiers

## Ajouter des fichiers dans l'index

```sh
git add mon_fichier  # Pour ajouter le fichier "mon_fichier"
git add -A           # Pour ajouter tous les fichiers
```

## Retirer des fichiers de l'index

```sh
git restore --staged <file>
```

## Ajouter des fichiers au dépôt

```sh
git commit -m "lorem ipsum"
```

Cette commande est l'élément central de Git. <br/>
Le [commit](https://git-scm.com/docs/git-commit/fr) _doit_ représenter un ensemble de modifications cohérentes entre elles.
