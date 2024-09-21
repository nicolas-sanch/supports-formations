# Git checkout

`git checkout` est une commande utilisée dans Git pour naviguer entre les branches, récupérer des versions spécifiques des fichiers ou restaurer des fichiers supprimés. Voici quelques-unes de ses utilisations principales :

### 1. **Changer de branche** :
   La commande la plus courante de `git checkout` est de passer d'une branche à une autre.

   ```bash
   git checkout nom-de-branche
   ```

   Cela vous permet de basculer sur une branche existante.

### 2. **Créer et changer de branche** :
   Si vous voulez créer une nouvelle branche et y basculer directement, vous pouvez utiliser :

   ```bash
   git checkout -b nouvelle-branche
   ```

   Cette commande crée une nouvelle branche appelée `nouvelle-branche` et passe dessus.

### 3. **Restaurer un fichier** :
   Vous pouvez également utiliser `git checkout` pour restaurer une version spécifique d'un fichier, en annulant les modifications non validées :

   ```bash
   git checkout -- fichier.txt
   ```

   Cela rétablit le fichier `fichier.txt` dans son état du dernier commit.

### 4. **Vérifier un commit spécifique** :
   Il est possible de revenir à un commit spécifique (en mode "détaché", c'est-à-dire sans être sur une branche).

   ```bash
   git checkout <hash-du-commit>
   ```

   Cela vous permet de naviguer temporairement dans l'historique des commits, mais attention à ne pas faire de modifications ici sans créer une branche, car vous serez en "état détaché".

### **Remarque importante** :
À partir de Git 2.23, la commande `git switch` a été introduite pour simplifier la gestion des branches. Par exemple, `git switch nom-de-branche` est maintenant recommandé pour changer de branche au lieu de `git checkout`.

Ainsi, `git checkout` reste puissant et flexible, mais dans de nombreux cas, des commandes plus spécialisées comme `git switch` ou `git restore` sont préférables pour des actions spécifiques.