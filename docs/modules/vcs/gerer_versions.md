# Commandes pour gérer ses versions

## Visualiser les détails des commits

```sh
git log
git log -1 # -1 Pour afficher le commit le plus récent
git reflog # Log les commits et toutes les actions réalisées en local
```

## Identifier l'auteur d'une ligne de code

```sh
git blame mon_fichier
```

## Revenir en arrière

### Git revert

```git revert```permet de revenir à l'état précédent en faisant un nouveau commit.<br/>
Le commit visé par la commande ```git revert```n'est pas supprimé, nous revenons à l'état précédent avec un nouveau commit.<br/>
L'historique est ainsi conservé.<br/>

### Git reset

```git reset```va revenir à l'état précedent sans créer de nouveau commit.

```sh
git reset notreCommitCible --hard # Permet de revenir à n'importe quel commit en supprimant tout ce qui est ultérieur
git reset notreCommitCible --mixed # Permet de revenir juste après le commit cible sans supprimer les modifications en cours
git reset notreCommitCible --soft # Permet de se placer sur un commit spécifique afin de voir le code à un instant donné
```

### Modifier le message du précédent commit

```sh
git commit --amend -m "Test" # Modifie le message du précédent commit
```

### Mettre de côté ses modifications avec Git stash

```sh
git stash --include-untracked # Sauvegarde le répertoire de travail et l'index
git stash list                # Liste les stashs d'un dépôt
git stash apply stash@{0}     # Récupère les modifications contenues dans le dernier stash
git stash drop stash@{0}      # Supprime le stash
```