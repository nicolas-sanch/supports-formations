# Hello World en PHP

### Prérequis
Docker installé sur votre machine

### Étape 1 : Créez un fichier PHP

Créez un répertoire pour votre projet et un fichier PHP :
```bash
mkdir php-web-hello-world
cd php-web-hello-world
echo "<?php echo '<h1>Hello World</h1>'; ?>" > index.php
```

### Étape 2 : Créez un fichier Dockerfile

Dans le même répertoire, créez un fichier nommé `Dockerfile` :
```Dockerfile
# Utilisez l'image officielle PHP avec Apache
FROM php:8.1-apache

# Copiez le fichier index.php dans le conteneur
COPY index.php /var/www/html/
```

### Étape 3 : Construisez l'image Docker

Dans votre terminal, exécutez la commande suivante pour construire l'image Docker :
```bash
docker build -t php-web-hello-world .
```

### Étape 4 : Exécutez le conteneur Docker

Une fois l'image construite, lancez le conteneur :
```bash
docker run --rm -p 8080:80 php-web-hello-world
```

### Étape 5 : Accédez à la page web

Ouvrez votre navigateur et accédez à l'URL suivante :
```
http://localhost:8080
```

### Résultat attendu
Vous devriez voir s'afficher le texte "Hello World" en tant que titre de la page web.
