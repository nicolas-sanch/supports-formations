# Docker

## Qu'est-ce que Docker ?

Docker est une plateforme open-source qui permet de développer, expédier et exécuter des applications à l'intérieur de conteneurs. Un conteneur regroupe tout ce dont une application a besoin pour fonctionner, y compris son code, ses bibliothèques et ses dépendances. Cela permet aux développeurs de s'assurer que leur application fonctionnera de manière cohérente, indépendamment de l'environnement où elle est déployée.

### Avantages de Docker :

- **Portabilité** : Les conteneurs Docker peuvent s'exécuter de manière identique sur n'importe quel système disposant de Docker.
- **Isolation** : Chaque conteneur est isolé, ce qui réduit les risques de conflits entre les applications.
- **Efficacité** : Les conteneurs sont légers car ils partagent le noyau du système hôte, contrairement aux machines virtuelles.
- **Scalabilité** : Docker facilite la mise en place de microservices et permet de faire évoluer les applications de manière fluide.

## Installation de Docker Desktop sur Windows

Docker Desktop est une application facile à installer qui inclut tout ce dont vous avez besoin pour exécuter Docker sur Windows. Il vous permet de créer, de gérer et d'exécuter des conteneurs directement depuis votre machine locale.

### Prérequis :

- **Windows 10 64-bit : Pro, Enterprise, ou Education (Build 1903 ou supérieur)**.
- **Sous-système Windows pour Linux (WSL 2)** activé. Docker Desktop utilise WSL 2 comme moteur de conteneur par défaut.

### Étapes d'installation :

#### 1. Télécharger Docker Desktop

- Rendez-vous sur la page officielle de [Docker Desktop pour Windows](https://www.docker.com/products/docker-desktop).
- Cliquez sur **Download for Windows** pour télécharger le fichier d'installation.

#### 2. Installer Docker Desktop

- Une fois le fichier téléchargé, double-cliquez dessus pour lancer l'installation.
- Suivez les instructions à l'écran. Vous devrez cocher l'option d'utilisation du **Sous-système Windows pour Linux 2** (WSL 2) si elle est disponible.

#### 3. Configuration après installation

- Après l'installation, Docker Desktop vous demandera de configurer certaines options. Il est recommandé de :
  - Choisir le moteur WSL 2 comme backend par défaut.
  - Configurer l'intégration avec WSL 2 pour les distributions Linux souhaitées (par exemple, Ubuntu).

#### 4. Vérification de l'installation

- Ouvrez **PowerShell** ou un **Terminal** et tapez la commande suivante pour vérifier que Docker est bien installé et fonctionnel :

  ```bash
  docker --version
  ```

  Vous devriez voir une sortie similaire à :

  ```
  Docker version 20.10.7, build f0df350
  ```

#### 5. Tester Docker

- Lancez la commande suivante pour télécharger et exécuter une image de test dans un conteneur :

  ```bash
  docker run hello-world
  ```

  Si tout fonctionne correctement, Docker téléchargera l'image `hello-world` et affichera un message de bienvenue.

### Ressources supplémentaires :

- Documentation officielle Docker : [https://docs.docker.com/](https://docs.docker.com/)
- Guide sur le Sous-système Windows pour Linux : [Documentation WSL](https://docs.microsoft.com/fr-fr/windows/wsl/)

## Conclusion

Docker est un outil puissant qui simplifie le développement et le déploiement des applications. Avec Docker Desktop, il est facile de configurer un environnement Docker sur Windows et de commencer à utiliser des conteneurs en quelques minutes.