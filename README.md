<!-- Titre du projet -->
# BoBoard. Projet Étudiant de 3eme année.

<!-- Description du projet -->
Ce projet est un tableau de bord affichant des informations météorologiques, des recettes et des articles d'actualité. Il utilise les API OpenWeatherMap, Tasty API et Mediastack API pour récupérer les données. Les résultats des requêtes sont stockés sur Firebase afin de limiter le nombre de requêtes.

<!-- Table des matières -->
## Table des matières
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Auteur](#auteur)
- [Contribuer](#contribuer)
- [Licence](#licence)

<!-- Fonctionnalités -->
## Fonctionnalités

- Affichage de la météo actuelle pour les cinq prochaines heures.
- Affichage d'une recette aléatoire.
- Affichage d'une liste d'actualités récentes.
- Rafraîchissement des données en temps réel.

<!-- Technologies utilisées -->
## Technologies utilisées

- Angular : un framework JavaScript pour le développement d'applications web.
- OpenWeatherMap API : une API de prévisions météorologiques.
- Tasty API : une API de recettes de cuisine.
- Mediastack API : une API de news.
- Firebase : une plateforme pour stocker les réponses de nos requêtes sur ces API.







<br><br>
<!-- Installation -->
## Installation


## Front
1. Cloner le projet depuis GitHub.
2. `cd ./dashfront/front/`.
3. Modifier les adresses qui seront Fetch dans les composants par celles générées dans votre back (exemple: `localhost:3080/weather` ).
4. Installer les dépendances avec la commande `npm install`.
5. Lancer l'application avec la commande `ng serve`.

## Back
1. Cloner le projet depuis GitHub.
2. `cd ./dashfront/back`.
3. Installer les dépendances avec la commande `npm install`.
4. Modifier les clés d'API dans les .js que vous souhaitez utiliser.
5. Ajouter un fichier `clefGoogle.json`, contenant une clé d'accès à votre projet firestore sur Firebase
6. `node server.js` afin de lancer les services qui seront appelés.

<!-- Utilisation -->
## Utilisation

1. Ouvrir l'application dans un navigateur web.
2. Cliquer sur le bouton "Actualiser" pour rafraîchir les données affichées.


<!-- Auteur -->
## Auteur


<table >
  <tr align="center">
    <td>
			<a href="https://github.com/xHookman">
				<img src="https://avatars.githubusercontent.com/u/77964646?v=4" width="175px;" alt="photo de profil {github} du compte"/>
				<br />
				<sub>
					<b>👤 Pecquery Charly</b>
				</sub>
			</a>
			<br />
		</td>
    <td>
			<a href="https://github.com/ArthurBlr">
				<img src="https://avatars.githubusercontent.com/u/97943017?v=4" width="175px;" alt="photo de profil {github} du compte"/>
				<br />
				<sub>
					<b>👤 BOULLIER Arthur</b>
				</sub>
			</a>
			<br />
		</td>
    <td>
			<a href="https://github.com/RadYio">
				<img src="https://avatars.githubusercontent.com/u/17927968?v=4" width="175px;" alt="photo de profil {github} du compte"/>
				<br />
				<sub>
					<b>👤 GONIN-SAGET Allan</b>
				</sub>
			</a>
			<br />
		</td>
  </tr>
</table>

<!-- Contribuer -->
## Contribuer
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request pour proposer des améliorations.

<!-- Licence -->
## Licence

Ce projet n'est sous aucune licence. Il est cependant interdit d'utiliser nos clés API présentes dans le code pour votre propre utilisation.
