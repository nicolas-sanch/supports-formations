# Installation de GIT

## Sous Debian

```sh
sudo apt-get install git
git --version
```

[Pour les distributions autres que Debian](http://git-scm.com/download/linux)

## Sous MacOS ou Windows

* Se rendre sur le site officiel : [git-scm.com](https://git-scm.com)
![1-GIT.png](img/1-GIT.png)
<br>

* Choisir la version <em>Standalone</em> 64-bit
![2-GIT.png](img/2-GIT.png)
<br>

* Lancer l'exécutable
![3-GIT.png](img/3-GIT.png)
<br>

* Accepter les CGU
![4-GIT.png](img/4-GIT.png)
<br>

* Laisser l'emplacement de l'installation par défaut
![5-GIT.png](img/5-GIT.png)
<br>

## Les composants à installer

* <em>Git Bash</em> est un émulateur de terminal pour Windows qui permet d'utiliser des commandes Git et des commandes Unix/Linux dans un environnement Windows. Il fournit une interface en ligne de commande pour interagir avec Git, facilitant la gestion des dépôts et des versions de code.
<br>
* <em>Git GUI</em> est une interface graphique pour Git, conçue pour simplifier l'utilisation des fonctionnalités de Git sans avoir à passer par la ligne de commande. Elle permet d'effectuer des opérations courantes comme le commit, le push, le pull ou la gestion des branches via des boutons et menus, offrant ainsi une approche visuelle pour gérer les dépôts Git.
![6-GIT.png](img/6-GIT.png)
<br>

* Laisser le programme d'installation créer un raccourci
![7-GIT.png](img/7-GIT.png)
<br>

* Choisir Visual Studio Code comme éditeur par défaut
![8-GIT.png](img/8-GIT.png)
<br>

* Renommer la branche par défaut<em>main</em>
![9-GIT.png](img/9-GIT.png)
<br>

* Permettre Git d'être appelé depuis des programmes tiers
![10-GIT.png](img/10-GIT.png)
<br>

* Le protocole SSH sera utilisé pour communiquer avec les dépôts distants
![11-GIT.png](img/11-GIT.png)
<br>

* Choisir les certificats par défaut
![12-GIT.png](img/12-GIT.png)
<br>

* Laisser Git gérer la différence de retours à la ligne entre Windows et Linux
![13-GIT.png](img/13-GIT.png)
<br>

* Utiliser MinTTY comme emulateur de terminal
![14-GIT.png](img/14-GIT.png)
<br>

* Lorsque nous exécuterons la commande <code>git pull </code>, Git effectueras un <em>fast-forward</em> our un <em>merge commit</em> en fonction des différences entre les dépôts.
![15-GIT.png](img/15-GIT.png)
<br>

* * Pour s'authentifier et interragir avec des dépôts distants, nous avons besoin de <em>Git Credential Manger</em>
![16-GIT.png](img/16-GIT.png)
<br>

Le cache permet d'améliorer les performances du système.<br>
* Nous n'avons pas besoin de manipuler des liens symboliques dans les TP proposés<br>
![17-GIT.png](img/17-GIT.png)
<br>

* Cette fonctionnalité n'est pas stable pour Git 2.46.0
![18-GIT.png](img/18-GIT.png)
<br>

* L'installation se lance
![19-GIT.png](img/19-GIT.png)
<br>

* Ouvrir Git Bash
![20-GIT.png](img/20-GIT.png)
<br>

* Git Bash nous permet d'interragir avec notre système via des commandes Linux.<br>
<code>pwd</code> permet d'afficher le chemin d'accès vers le répertoire où se situe l'utilisateur qui a entré la commande
![21-GIT.png](img/21-GIT.png)
<br>