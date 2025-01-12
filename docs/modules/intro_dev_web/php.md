# Hypertext Preprocessor

PHP (Hypertext Preprocessor) est un langage de programmation côté serveur conçu pour le développement web dynamique. Il s'intègre facilement avec HTML et est compatible avec de nombreux systèmes de gestion de bases de données comme MySQL, PostgreSQL, et SQLite.

Il est :
- Open source
- Facile à apprendre
- Compatible avec de nombreux serveurs web (Apache, Nginx, etc.)
- Supporte différents systèmes d'exploitation (Windows, Linux, macOS)

## Installation de PHP
Pour exécuter du code PHP, vous aurez besoin :
1. D'un serveur web (ex. : Apache ou Nginx)
2. De PHP installé
3. D'une base de données (optionnelle, comme MySQL)

Des outils comme XAMPP ou WAMP permettent d'installer facilement un environnement de développement local.

## Syntaxe de base

### Structure d'un script PHP
Un fichier PHP contient du code HTML et PHP. Le code PHP est délimité par les balises `<?php` et `?>`.

```php
<!DOCTYPE html>
<html>
<head>
    <title>Exemple PHP</title>
</head>
<body>
    <h1>Bienvenue</h1>
    <?php
        echo "Bonjour, monde !";
    ?>
</body>
</html>
```

### Variables
Les variables en PHP commencent par le signe `$` et ne nécessitent pas de déclaration explicite de type.

```php
<?php
$name = "Alice";
$age = 25;

echo "Nom : $name, Age : $age";
?>
```

### Types de données
1. **Chaîne de caractères** : `"texte"`
2. **Entier** : `123`
3. **Flottant** : `3.14`
4. **Booléen** : `true` ou `false`
5. **Tableau** : `array()`
6. **Objet** : instancié à partir d'une classe

### Conditions
Les conditions en PHP utilisent les mêmes opérateurs que de nombreux langages.

```php
<?php
$score = 85;

if ($score >= 90) {
    echo "Excellent";
} elseif ($score >= 75) {
    echo "Bien";
} else {
    echo "Peut mieux faire";
}
?>
```

### Boucles
#### Boucle `for`
```php
<?php
for ($i = 0; $i < 5; $i++) {
    echo "Compteur : $i<br>";
}
?>
```

#### Boucle `while`
```php
<?php
$x = 0;
while ($x < 5) {
    echo "Valeur de x : $x<br>";
    $x++;
}
?>
```

#### Boucle `foreach`
```php
<?php
$fruits = array("Pomme", "Banane", "Orange");
foreach ($fruits as $fruit) {
    echo "Fruit : $fruit<br>";
}
?>
```

## Fonctions
Les fonctions permettent de réutiliser du code.

### Déclaration d'une fonction
```php
<?php
function saluer($nom) {
    return "Bonjour, $nom !";
}

echo saluer("Alice");
?>
```

### Fonctions prédéfinies
- `strlen($str)` : longueur d'une chaîne
- `array_push($array, $value)` : ajouter un élément à un tableau
- `date($format)` : afficher la date

## Manipulation de bases de données

### Connexion à une base MySQL
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

echo "Connexion réussie";
?>
```

### Requête SQL
```php
<?php
$sql = "SELECT id, nom FROM utilisateurs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Nom: " . $row["nom"] . "<br>";
    }
} else {
    echo "0 résultats";
}

$conn->close();
?>
```