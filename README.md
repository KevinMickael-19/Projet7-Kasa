# 🏡 Projet Kasa - Application de location de logements

## 📝 Présentation du projet
Ce projet a été réalisé dans le cadre de ma formation **Intégrateur web** chez OpenClassrooms. 

**Le contexte :** J'ai agi en tant que développeur Front-end freelance pour "Kasa", une entreprise spécialisée dans la location d’appartements entre particuliers depuis près de 10 ans. L’entreprise souhaitait faire une refonte totale de son site internet pour passer à une stack 100% JavaScript (NodeJS côté Back-end et React côté Front-end).

**Mon rôle :** J'ai été chargé de développer l'intégralité de l'interface utilisateur (Front-end) en respectant les maquettes Figma fournies, en utilisant les composants React et en gérant la navigation avec React Router.

---

## 🎯 Compétences validées
* **Initialiser une application web** avec un outil de build (Vite).
* **Créer des composants avec React** ⚛️ (modulaires et réutilisables).
* **Développer les routes d'une application web** avec React Router 🛣️.

---

## 🛠️ Stack et Contraintes Techniques

### Outils et Technologies
* **Framework :** React 19.
* **Outil de build :** Vite 8.
* **Routage :** React Router v7.
* **Style :** CSS.
* *Note : Aucune librairie React externe n'a été utilisée.*

### Architecture React
* Découpage strict en composants modulaires (un composant = un fichier).
* Utilisation exclusive de **composants fonctionnels** modernes.
* Gestion dynamique des données via l'utilisation des **Props** et du **State** local.
* Génération dynamique de listes d'éléments en itérant avec la méthode `.map()`.
* Gestion fluide des événements utilisateur.

### Configuration du Routage
* Centralisation de la logique du routeur dans un fichier unique.
* Configuration d'une URL par page.
* Utilisation de **routes dynamiques** pour récupérer les paramètres dans l'URL (ID du logement) et afficher la fiche correspondante.
* Mise en place d'une **page d'erreur 404** sécurisée, qui s'affiche si l'URL est introuvable ou si l'ID du logement n'existe pas dans la base de données.

---

## ✨ Fonctionnalités Clés Développées

### 1. Galerie d'images (Carrousel)
* **Navigation infinie :** Si l'utilisateur est sur la première image et clique sur "Précédent", il bascule sur la dernière image. Inversement, le clic sur "Suivant" depuis la dernière image ramène à la première.
* **Affichage conditionnel :** S'il n'y a qu'une seule image pour un logement, les flèches de navigation sont automatiquement masquées.
* **Intégrité du design :** La galerie conserve une hauteur fixe définie par la maquette. Les images s'adaptent, se coupent et se centrent dynamiquement.

### 2. Menus Déroulants (Collapse)
* **État initial :** Tous les menus déroulants sont fermés par défaut au chargement de la page.
* **Interactivité :** Un clic de l'utilisateur sur le titre d'un *Collapse* permet d'ouvrir ou de fermer le contenu de manière fluide.
