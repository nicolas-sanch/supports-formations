# Laravel

## Introduction
Laravel est un framework PHP open-source, moderne et puissant, conçu pour le développement d’applications web. Il suit le paradigme MVC (Modèle-Vue-Contrôleur) et est reconnu pour sa syntaxe élégante et expressive. Laravel facilite la création d'applications robustes et évolutives grâce à ses nombreuses fonctionnalités intégrées.

### Pourquoi utiliser Laravel ?
- **Facilité d’utilisation :** Syntaxe claire et intuitive.
- **Large écosystème :** Intégration avec des outils comme Eloquent ORM, Blade, et Artisan.
- **Sécurité :** Protection contre les attaques courantes (CSRF, injections SQL, XSS).
- **Productivité accrue :** Générateurs de code, migrations de base de données, tests unitaires intégrés.
- **Communauté active :** Documentation détaillée et nombreuses ressources en ligne.


### Installation via Composer

 **Installer Composer :**
   ```bash
   curl -sS https://getcomposer.org/installer | php
   mv composer.phar /usr/local/bin/composer
   ```

 **Créer un projet Laravel :**
   ```bash
   composer create-project laravel/laravel nom_du_projet
   ```

 **Configurer le projet :**
   - Renommez le fichier `.env.example` en `.env`.
   - Configurez les paramètres de la base de données dans le fichier `.env` :
     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=nom_de_la_base
     DB_USERNAME=utilisateur
     DB_PASSWORD=mot_de_passe
     ```

 **Lancer le serveur de développement :**
   ```bash
   php artisan serve
   ```
   Accédez à votre application via http://localhost:8000.

### Installation via Docker

Laravel peut être installé et exécuté à l’aide de Docker pour simplifier le processus de configuration.

 **Cloner le projet Laravel via Composer :**
   ```bash
   composer create-project laravel/laravel nom_du_projet
   cd nom_du_projet
   ```

 **Configurer Docker avec Sail :**
   Laravel Sail est un environnement Docker intégré. Pour l'utiliser :
   ```bash
   composer require laravel/sail --dev
   php artisan sail:install
   ```
   Sélectionnez les services nécessaires (MySQL, Redis, etc.).

 **Démarrer l’environnement Docker :**
   ```bash
   ./vendor/bin/sail up
   ```

 **Accéder à l'application :**
   L'application sera disponible à [http://localhost](http://localhost).

 **Gestion des commandes via Sail :**
   Préfixez vos commandes artisan et autres avec `./vendor/bin/sail` :
   ```bash
   ./vendor/bin/sail artisan migrate
   ```


## Structure du projet Laravel

Un projet Laravel est organisé en plusieurs dossiers :

- **app/** : Contient le code métier, y compris les contrôleurs, les modèles et les middlewares.
- **bootstrap/** : Contient le fichier `app.php` qui initialise le framework.
- **config/** : Contient les fichiers de configuration de l’application.
- **database/** : Gère les migrations, les seeds et les fichiers liés à la base de données.
- **public/** : Dossier public accessible depuis le web.
- **resources/** : Contient les vues, les fichiers CSS/JS et les langues.
- **routes/** : Définit les routes de l’application (web.php, api.php, etc.).
- **storage/** : Stocke les fichiers générés, les logs, et les caches.
- **tests/** : Contient les tests unitaires et fonctionnels.


## Principales fonctionnalités

###  Routage
Laravel utilise un système de routage simple et intuitif. Les routes sont définies dans le fichier `routes/web.php` pour les pages web et `routes/api.php` pour les API.

Exemple :
```php
Route::get('/', function () {
    return view('welcome');
});

Route::get('/utilisateurs', [UserController::class, 'index']);
```

###  Contrôleurs
Les contrôleurs organisent la logique de votre application. Vous pouvez en créer un avec Artisan :
```bash
php artisan make:controller NomDuControleur
```
Exemple :
```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('users.index');
    }
}
```

###  Modèles et Eloquent ORM
Eloquent est l’ORM intégré de Laravel qui facilite les interactions avec la base de données.

Création d’un modèle :
```bash
php artisan make:model NomDuModele
```
Exemple :
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
}
```

###  Vues avec Blade
Blade est le moteur de template de Laravel. Il permet d’utiliser des structures conditionnelles et des boucles directement dans les fichiers de vue.

Exemple :
```blade
<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>
</head>
<body>
    <h1>Bienvenue, {{ $nom }}</h1>
</body>
</html>
```

###  Migrations
Les migrations permettent de versionner la structure de votre base de données.

Création d’une migration :
```bash
php artisan make:migration create_users_table
```

Exemple de migration :
```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
```



Pour aller plus loin : [documentation officielle de Laravel](https://laravel.com/docs).