# Configuration de Git

## Configuration minimale

Nous devons définir le nom d'utilisateur et l'adresse email qui seront associés aux commits.
```sh
git config --global user.name "Prenom nom"
git config --global user.email email@domaine.extension
```
<p>La configuration --global signifie que ces paramètres s'appliquent à tous les dépôts Git sur votre machine. 
<br>
Vous pouvez également configurer ces options au niveau du dépôt (sans --global) pour des paramètres spécifiques à un dépôt particulier.
</p>
<p>Les différents niveaux de configuration de Git, dont les éléments sont stockés dans différents fichiers sont :</p>

|niveau|argument|fichier|
|---|---|---|
|système|--system|/etc/gitconfig|
|utilisateur|--global|~/.gitconfig|
|dépôt|--local|.git/config|

## Configuration des paramètres

### L'éditeur de texte par défaut

Exemple où l'on définit _vi_ comme éditeur par défaut
```sh
git config --global core.editor vi
```

### Template de message de commit

Un modèle de contenu de commit peut-être instauré ajoutant le fichier [~/versions-du-code-source/1_Configuration/template-commit.txt](https://github.com/nicolas-sanch/versions-du-code-source/blob/main/1_Configuration/template-commit.txt) à la configuration

```sh
git config --global commit.template ~/versions-du-code-source/1_Configuration/template-commit.txt
```

### Ignorer des fichiers
⚠️ Avant même de créer notre premier projet Git, il est important d'avoir à l'esprit que __certains fichiers ne doivent pas être versionnés__<br/>
C'est en particulier le cas des fichiers de configuration, logs, build, etc ... <br/>
Le fichier [.gitignore](https://github.com/nicolas-sanch/versions-du-code-source/blob/main/1_Configuration/.gitignore) est utilisé pour indiquer à Git de ne pas prendre en compte certains fichiers ([Documentation](https://git-scm.com/docs/gitignore))

### Définitions d'alias

Pour raccourcir l'appel de commandes git, il est possible de définir des alias tel que dans les exemples suivants :
```sh
git config --global alias.co checkout
git config --global alias.last 'log -1 HEAD'
```

## Aide

```sh
git --help
git config --help # Pour visualiser le manuel de la commande config
```