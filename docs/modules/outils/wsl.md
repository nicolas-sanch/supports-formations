# Windows Subsystem for Linux (WSL)

## Introduction à WSL

Windows Subsystem for Linux (WSL) permet d'exécuter un environnement GNU/Linux directement sur Windows, sans avoir besoin d'une machine virtuelle. Cela permet aux développeurs d'accéder à des outils Linux directement sur leur machine Windows.

WSL est particulièrement utile pour exécuter des scripts, utiliser des outils de développement ou lancer des serveurs Linux directement depuis Windows. 

## Mise à jour de WSL vers WSL2

### Qu'est-ce que WSL2 ?

WSL2 est une version améliorée de WSL qui utilise un noyau Linux complet, offrant de meilleures performances pour certaines tâches comme la gestion des fichiers et une compatibilité accrue avec les applications Linux.

### Étapes pour mettre à jour vers WSL2

 **Vérifier que votre version de Windows est compatible** :  
   WSL2 est disponible sur **Windows 10, version 1903, build 18362 ou supérieure**, ainsi que sur **Windows 11**.

   Pour vérifier votre version de Windows, ouvrez une invite de commande et exécutez :
   ```bash
   winver
   ```

 **Activer le sous-système Windows pour Linux** :  
   Ouvrez PowerShell en tant qu'administrateur et exécutez la commande suivante :
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```

 **Activer la fonctionnalité "Machine Virtuelle"** :  
   Toujours dans PowerShell, exécutez la commande suivante :
   ```powershell
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```

 **Télécharger et installer le noyau de mise à jour WSL2** :  
   Téléchargez et installez le noyau Linux WSL2 depuis le site officiel de Microsoft :  
   [Télécharger le noyau WSL2](https://aka.ms/wsl2kernel)

 **Définir WSL2 comme version par défaut** :  
   Dans PowerShell, exécutez la commande suivante :
   ```bash
   wsl --set-default-version 2
   ```

 **Vérifier l'installation** :  
   Vous pouvez vérifier la version de WSL installée avec cette commande :
   ```bash
   wsl -l -v
   ```

## Installation d'une distribution Linux

Une fois que WSL est activé et que vous avez mis à jour vers WSL2, vous pouvez installer une distribution Linux.

 **Ouvrir Microsoft Store** :  
   Ouvrez le **Microsoft Store** sur votre ordinateur et cherchez "WSL".

 **Choisir une distribution** :  
   Plusieurs distributions Linux sont disponibles, telles que :
   - Ubuntu
   - Debian
   - Kali Linux
   - openSUSE

   Choisissez celle que vous souhaitez installer et cliquez sur **Installer**.

 **Configurer la distribution** :  
   Une fois installée, lancez la distribution à partir du menu Démarrer de Windows. Lors du premier lancement, vous devrez configurer un nom d'utilisateur et un mot de passe Linux.

## Utilisation de WSL dans Visual Studio Code

Visual Studio Code (VS Code) offre une excellente intégration avec WSL grâce à l'extension "Remote - WSL". Cela permet d'ouvrir des dossiers, fichiers et projets dans un environnement Linux, directement depuis l'interface de VS Code.

### Étapes pour utiliser WSL avec Visual Studio Code

 **Installer Visual Studio Code** :  
   Si ce n'est pas déjà fait, téléchargez et installez [Visual Studio Code](https://code.visualstudio.com/).

 **Installer l'extension "Remote - WSL"** :  
   Ouvrez Visual Studio Code, puis allez dans l'onglet des extensions (icône à gauche en forme de carré) et recherchez "Remote - WSL". Installez l'extension.

 **Ouvrir un terminal WSL dans VS Code** :  
   Une fois l'extension installée :
   - Ouvrez VS Code.
   - Appuyez sur `Ctrl + Maj + P` pour ouvrir la palette de commandes.
   - Tapez `WSL: New Window` ou `WSL: Reopen Folder in WSL`.

 **Utiliser les commandes Linux depuis VS Code** :  
   Vous pouvez maintenant ouvrir un terminal Linux à l'intérieur de VS Code en allant dans `Terminal > Nouveau Terminal`. Ce terminal utilise l'environnement de votre distribution WSL.

 **Développement dans l'environnement WSL** :  
   Vous pouvez ouvrir un projet directement depuis votre distribution WSL en ouvrant un dossier à l'aide de l'explorateur de fichiers de VS Code. Toutes les commandes, comme `git`, `npm`, etc., seront exécutées dans l'environnement Linux.

## Commandes utiles pour WSL

Voici quelques commandes WSL pratiques à utiliser :

- **Lancer une distribution spécifique** :
  ```bash
  wsl -d <NomDeLaDistribution>
  ```

- **Lister toutes les distributions installées** :
  ```bash
  wsl -l
  ```

- **Changer la version WSL d'une distribution** :
  ```bash
  wsl --set-version <NomDeLaDistribution> 2
  ```

- **Accéder aux fichiers Windows depuis WSL** :  
  Depuis une distribution Linux, vous pouvez accéder aux fichiers Windows en naviguant dans le dossier `/mnt/c/`.

## Conclusion

Le Windows Subsystem for Linux (WSL) et WSL2 offrent un environnement puissant pour les développeurs sur Windows. Grâce à l'intégration avec des outils comme Visual Studio Code, vous pouvez profiter du meilleur des deux mondes : la productivité de Windows et la puissance des outils Linux.