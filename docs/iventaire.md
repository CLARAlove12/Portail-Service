# Inventaire des composants

Inventaire réalisé à partir de la maquette d'accueil visible et des écrans/fonctionnalités 

|**Composant**|**Écrans**|**Variantes**|**États à concevoir**|
|-|-|-|-|
|`site-header`|Accueil ; Liste des services ; Fiche d'un service ; Formulaire de demande ; Espace personnel|En-tête commun avec nom du portail ; adaptation responsive si prévue par la charte|Par défaut ; navigation adaptée à la page courante|
|`primary-navigation`|Accueil ; Liste des services ; Fiche d'un service ; Formulaire de demande ; Espace personnel|Services ; Mes demandes ; Aide ; Mon espace|Par défaut ; page courante (`aria-current="page"`) ; menu ouvert sur petit écran si nécessaire|
|`navigation-link`|En-tête et pied de page des cinq pages|Lien principal ; lien secondaire ; lien de pied de page|Par défaut ; survol ; focus clavier ; page courante ; lien visité|
|`category-item`|Accueil ; Liste des services|Prêt de matériel ; Salles ; Logement ; Sport ; Aides ; Santé|Par défaut ; survol ; focus clavier ; catégorie sélectionnée/filtrée|
|`service-card`|Accueil ; Liste des services|Service à la une ; carte dans la liste des services|Par défaut ; survol ; focus clavier ; service complet ; service avec places disponibles|
|`availability-indicator`|Accueil ; Liste des services ; Fiche d'un service|Nombre de places disponibles ; aucune place disponible|Places disponibles ; places limitées ; complet ; disponibilité inconnue|
|`form-field`|Accueil ; Liste des services ; Espace personnel ; Formulaire de demande (formulaire détaillé prévu au TP 02)|Recherche ; champ de formulaire selon la donnée attendue|Vide ; rempli ; focus ; invalide ; désactivé ; aide ou erreur associée|
|`category-filter-option`|Liste des services|Une option par catégorie ; option « toutes les catégories » si présente dans l'interface|Non sélectionnée ; sélectionnée ; focus clavier ; désactivée si indisponible|
|`choice-control`|Liste des services ; Espace personnel|Case à cocher « Places disponibles uniquement » ; boutons radio du thème|Décoché/non sélectionné ; coché/sélectionné ; focus clavier ; désactivé|
|`action-button`|Accueil ; Liste des services ; Fiche d'un service ; Formulaire de demande ; Espace personnel|Rechercher ; Ajouter aux favoris ; actions de formulaire|Par défaut ; survol ; focus clavier ; activé ; désactivé ; en cours d'envoi si nécessaire|
|`service-detail-item`|Fiche d'un service|Lieu ; délai ; nombre de places, présentés dans une liste de définitions (`dl`)|Information renseignée ; information absente ou non communiquée|
|`request-table-row`|Espace personnel|Une ligne par demande de l'étudiant dans le tableau de données|Demande selon les statuts réellement fournis par `db.json`|

## Écarts à la maquette

|**Écart**|**Raison**|
|-|-|
|À compléter après comparaison de chaque écran avec son intégration HTML.|L'énoncé demande de consigner les écarts et leur justification.|


