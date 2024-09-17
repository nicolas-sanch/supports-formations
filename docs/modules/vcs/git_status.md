# Git status

La commande `git status` est l’une des plus utiles et des plus fréquemment utilisées dans Git. Elle permet de connaître l'état actuel de votre répertoire de travail et de l'index. Autrement dit, elle vous informe sur les changements effectués dans vos fichiers par rapport à la dernière version commitée, ainsi que sur les fichiers qui sont prêts à être commités ou ceux qui ne le sont pas encore.

### Voici ce que vous pouvez voir avec `git status` :

#### 1. **Les fichiers modifiés mais non suivis (untracked files)**

Lorsque vous créez un nouveau fichier ou modifiez un fichier existant sans l'ajouter à l'index avec `git add`, Git considère ces fichiers comme "non suivis". La commande `git status` affichera ces fichiers sous la section **"Untracked files"**.

- Ces fichiers ne seront pas inclus dans le prochain commit tant que vous ne les aurez pas ajoutés à l'index.
- Exemple : Vous avez créé un nouveau fichier `README.md`, mais vous ne l'avez pas encore ajouté. `git status` affichera :
  ```
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
      README.md
  ```

#### 2. **Les fichiers modifiés et suivis mais non indexés (modified files)**

Si vous avez modifié un fichier qui était déjà suivi par Git, mais que vous ne l'avez pas encore ajouté à l'index (avec `git add`), `git status` vous indiquera que ce fichier a été modifié. Ces fichiers apparaîtront sous la section **"Changes not staged for commit"**.

- Exemple : Vous avez modifié `main.py`, mais vous n'avez pas encore fait de `git add`. `git status` affichera :
  ```
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
      modified:   main.py
  ```

#### 3. **Les fichiers prêts pour un commit (staged files)**

Une fois que vous avez ajouté des fichiers ou des modifications à l'index à l'aide de `git add`, ces fichiers sont désormais "staged", c'est-à-dire prêts à être commités. Ils apparaîtront sous la section **"Changes to be committed"**.

- Exemple : Après avoir ajouté `main.py` à l'index avec `git add main.py`, `git status` affichera :
  ```
  Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
      modified:   main.py
  ```

#### 4. **Fichiers supprimés (deleted files)**

Si un fichier suivi a été supprimé, Git vous indiquera également cette suppression. Cela apparaîtra dans les sections correspondantes selon que la suppression a été indexée (staged) ou non.

- Exemple : Vous avez supprimé `test.txt`, mais sans encore committer ou ajouter la suppression à l'index, `git status` affichera :
  ```
  Changes not staged for commit:
    deleted:    test.txt
  ```

#### 5. **Informations supplémentaires**

- **Branche courante** : `git status` vous indique toujours sur quelle branche vous travaillez. Si vous êtes sur une branche comme `main` ou `dev`, Git affichera cela en haut de la sortie.
- **Message de comparaison avec le dépôt distant** : Si vous avez un dépôt distant configuré (comme GitHub ou GitLab), `git status` vous dira également si vous avez des commits en attente de push ou si votre branche locale est à jour avec le dépôt distant.

### Exemple d'utilisation typique :
```bash
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
    modified:   main.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    newfile.txt
```

### En résumé :
La commande `git status` vous permet de :
- Voir les fichiers modifiés non suivis par Git (non indexés).
- Vérifier quels fichiers sont prêts à être commités (indexés).
- Suivre les fichiers non suivis et nouvellement créés.
- Avoir une vue d’ensemble sur l’état actuel de votre répertoire et savoir quelles actions sont nécessaires avant de faire un commit.

C’est une commande idéale pour s’assurer que vous avez tout bien préparé avant d’enregistrer vos modifications dans l’historique du dépôt avec un commit.