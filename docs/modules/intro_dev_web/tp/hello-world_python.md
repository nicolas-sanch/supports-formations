# Hello World en Python avec Flask

### Prérequis
- Docker installé sur votre machine
- Connaissances de base en ligne de commande

### Étape 1 : Créez un fichier Python

Créez un répertoire pour votre projet et un fichier Python :
```bash
mkdir python-web-hello-world
cd python-web-hello-world
echo "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello():\n    return '<h1>Hello World</h1>'\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=5000)" > app.py
```

### Étape 2 : Créez un fichier Dockerfile

Dans le même répertoire, créez un fichier nommé `Dockerfile` :
```Dockerfile
# Utilisez l'image officielle Python
FROM python:3.11

# Installez Flask
RUN pip install flask

# Copiez le fichier app.py dans le conteneur
COPY app.py /usr/src/myapp/

# Définissez le répertoire de travail
WORKDIR /usr/src/myapp

# Commande par défaut pour exécuter l'application Flask
CMD ["python", "app.py"]
```

### Étape 3 : Construisez l'image Docker

Dans votre terminal, exécutez la commande suivante pour construire l'image Docker :
```bash
docker build -t python-web-hello-world .
```

### Étape 4 : Exécutez le conteneur Docker

Une fois l'image construite, lancez le conteneur :
```bash
docker run --rm -p 5000:5000 python-web-hello-world
```

### Étape 5 : Accédez à la page web

Ouvrez votre navigateur et accédez à l'URL suivante :
```
http://localhost:5000
```

### Résultat attendu
Vous devriez voir s'afficher le texte "Hello World" en tant que titre de la page web.