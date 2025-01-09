# Docker

Docker est une plateforme open-source qui permet de développer, expédier et exécuter des applications à l'intérieur de conteneurs.<br>
**Il permet aux développeurs de s'assurer que leur application fonctionnera de manière cohérente, indépendamment de l'environnement où elle est déployée.**

### ✅ **Qu'est-ce qu'un conteneur Docker ?**

Un **conteneur Docker** est une technologie de virtualisation légère qui permet d’exécuter des applications et leurs dépendances de manière isolée et portable. <br>
Contrairement aux machines virtuelles (VM), les conteneurs partagent le noyau du système d’exploitation de l’hôte, ce qui les rend beaucoup plus légers, rapides à démarrer et faciles à déplacer d'un environnement à un autre.

### 🚢 **Comprendre le concept de Docker**
Docker est une plateforme open-source qui automatise le déploiement d'applications dans des **conteneurs**. Chaque conteneur inclut :
- ✅ **Le code de l’application**  
- ✅ **Les bibliothèques nécessaires**  
- ✅ **Les dépendances et configurations**  

Cela garantit que l’application s’exécute de manière **identique** sur différentes machines, peu importe l'environnement sous-jacent.

### ⚙️ **Fonctionnement d’un conteneur Docker**
1. **Image Docker** :  
   Une **image Docker** est un modèle en lecture seule qui contient tout ce qu'il faut pour exécuter une application, comme le système de fichiers, le code, les dépendances, etc.  
   
2. **Conteneur Docker** :  
   Un conteneur est une **instance en cours d'exécution d'une image**. C'est un environnement isolé où une application s'exécute.

## Installation de Docker Desktop sur Windows

Docker Desktop permet de créer, de gérer et d'exécuter des conteneurs depuis votre machine locale.

### Prérequis :

- **Windows 10 64-bit : Pro, Enterprise, ou Education (Build 1903 ou supérieur)**.
- **Sous-système Windows pour Linux (WSL 2)** activé. Docker Desktop utilise WSL 2 comme moteur de conteneur par défaut.

### Étapes d'installation :

#### Télécharger Docker Desktop

- Rendez-vous sur la page officielle de [Docker Desktop pour Windows](https://www.docker.com/products/docker-desktop).
- Cliquez sur **Download for Windows** pour télécharger le fichier d'installation.

#### Installer Docker Desktop

- Une fois le fichier téléchargé, double-cliquez dessus pour lancer l'installation.
- Suivez les instructions à l'écran. Vous devrez cocher l'option d'utilisation du **Sous-système Windows pour Linux 2** (WSL 2) si elle est disponible.

#### Configuration après installation

- Après l'installation, Docker Desktop vous demandera de configurer certaines options. Il est recommandé de :
  - Activer l'intégration WSL2 dans les paramètres de Docker Desktop.
    - Allez dans <b>Settings > Resources > WSL Integration</b>
  - Activer les distributions Linux avec lesquelles vous voulez utiliser Docker (par exemple, Debian ou Ubuntu).


#### Vérification de l'installation

- Ouvrez **PowerShell** ou un **Terminal** et tapez la commande suivante pour vérifier que Docker est bien installé et fonctionnel :

  ```bash
  docker --version
  ```

  Vous devriez voir une sortie similaire à :

  ```
  Docker version 20.10.7, build f0df350
  ```

#### Tester Docker

- Lancez la commande suivante pour télécharger et exécuter une image de test dans un conteneur :

  ```bash
  docker run hello-world
  ```

Docker téléchargera l'image `hello-world` depuis le Docker Hub et affichera un message de bienvenue.


### Ressources supplémentaires :

- Documentation officielle Docker : [https://docs.docker.com/](https://docs.docker.com/)
- Guide sur le Sous-système Windows pour Linux : [Documentation WSL](https://docs.microsoft.com/fr-fr/windows/wsl/)