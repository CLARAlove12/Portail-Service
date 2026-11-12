D:\\FRONTEND> npm create vite@latest portail -- --template vanilla --no-interactive
Need to install the following packages:
create-vite@9.3.3
Ok to proceed? (y) Y

> npx
> cva portail --template vanilla --no-interactive



create-vite v9.3.3

|
o  Scaffolding project in D:\\FRONTEND\\portail...
|
—  Done. Now run:

cd portail
npm install
npm run dev

1-)La version de vite afficher est la version 9.3.3

2-)Comment nous voyons la page d'accueil


SECTION
h1 = Tout les services du campus au même endroit
 
-SECTION Catégories
H2 = Parcourir par catégorie
H3 = Prêt de matériel
H3 = Salles
H3 = Logement
H3 = Sport
H3 = Aides
H3 = Santé

-SECTION Services
 H2 = Services à le une
 H3 = Prêt de camera
 H3 = Réservation de salle
 H3 = Inscription au sport universitaire


6) découpage de chaque écran en régions :  en-tête, navigation, contenu principal, contenu complémentaire,
   pied de page et Note pour chaque écran la balise de chaque région

#Accueil
navigation:  logo, services, Mes demandes, Aide, Mon espace

en-tête: Titre, mot d'accroche , search bar

contenu principal : titre, catégories, plage de services, 

pied de page: titres + détails

#Demande

navigation:  logo, services, Mes demandes, Aide, Mon espace

contenu principal: 
formulaire de coordonées,
formulaire de demande,
bouton  d'envoie de formulaire
lien d'annulation du formulaire

contenu complémentaire : prêt de caméra

pied de page: titres et paragraphe

#Mes demandes

navigation:  logo, services, Mes demandes, Aide, Mon espace

contenu principal: titre: mes demandes, mot de bienvenue, statut et search bar statut, tableau de l'historique service 

pied de page: titres + détails

#Services

navigation:  logo, services, Mes demandes, Aide, Mon espace

contenu principal: image descriptive, titre, titre prêt caméra, commentaire

prêt de matériel: lieu , délai, places,
deux boutons une faire une demande et une ajouter aux favoris, un titre
 service en détail et paragraphe
filter pour chaque catégorie 

titre le service en détail et une paragraphe, 
titre dans la même catégorie : catégories et description de chacune 

pied de page: titres + paragraphe



Je m'attends à ce que Chrome sélectionne une image proche de 1200 px pour une image occupant presque toute la largeur de l'écran, puisque le DPR est de 3.

7)
 Images responsives

**Configuration du test**
- Navigateur : Google Chrome
- Appareil simulé : iPhone 12 Pro
- format ou tails de l'écran : 390 × 844 px

**Résultats – index.html**

| Image | Fichier chargé | Format | Taille |
|---|---|---|---|
| Caméra | camera-1200.webp | WebP | 5,5 kB |
| Salle | salle-1200.webp | WebP | 3,7 kB |
| Sport | sport-1200.webp | WebP | 4,5 kB |

**Résultats – services.html**

| Image | Fichier chargé | Format | Taille |
|---|---|---|---|
| Logement | logement-1200.webp | WebP | 5,4 kB |
| Aide | aide-1200.webp | WebP | 8,7 kB |
| Colocation | colocation-1200.webp | WebP | 8,4 kB |

**Résultats – service.html**

| Image | Fichier chargé | Format | Taille |
|---|---|---|---|
| Matériel | materiel-1200.webp | WebP | 4,4 kB |
| Ordinateur portable | portable-1200.webp | WebP | 3,9 kB |
| Impression | impression-1200.webp | WebP | 3,9 kB |
| Caméra | camera-1200.webp | WebP | 5,5 kB |

**Analyse**
- Format WebP observé sur toutes les images responsives.
- La version 1200 px a été sélectionnée sur les trois pages.





