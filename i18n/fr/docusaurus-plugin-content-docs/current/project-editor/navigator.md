---
sidebar_position: 1
---

# Navigateur

Le Navigateur est la barre latérale située à gauche, qui permet de naviguer rapidement dans votre projet.

<img title="Navigateur" src="/img/screenshots/navigator-v4.png" width="246" className="drop-shadow" />

## Menu contextuel

En effectuant un clic droit sur un élément du Navigateur, vous pouvez ouvrir un menu contextuel. Le menu contextuel d’une scène, illustré ci-dessous, permet d de définir une étiquette de couleur, de définir la scène de départ du projet, de renommer ou de supprimer la scène.

<img title="Navigateur" src="/img/screenshots/navigator-context-menu-v4.png" width="528" className="drop-shadow margin-bottom" />

## Dossiers

Si vos scènes, scripts, palettes ou ressources contiennent les caractères `/` ou `\` dans leur nom, ceux-ci seront interprétés comme des dossiers dans le Navigateur, ce qui permet d’organiser votre projet.

Par exemple, si vous nommez une scène `caves/Underground` comme ci-dessous :

<img title="Renommer des dossiers dans le Navigateur" src="/img/screenshots/navigator-folders-rename-v4.png" width="246" className="drop-shadow margin-bottom" />

cela fera apparaître cette scène dans le Navigateur sous le nom `Underground`, à l’intérieur un dossier nommé `caves` :

<img title="Navigator Folders" src="/img/screenshots/navigator-folders-v4.png" width="246" className="drop-shadow margin-bottom" />

:::warning
Lorsque vous renommez des ressources comme les arrières-plans en dossiers via le Navigateur, les fichiers physiques de votre projet (`.png` etc.) seront également déplacés vers la nouvelle structure de dossiers. Il est important de sauvegarder votre projet après avoir effectué ce type de modification, car déplacer ces fichiers sans sauvegarder pourrait empêcher l’application de localiser les ressources lors du prochain chargement du projet.

Il est recommandé d’utiliser un [système de contrôle de version](/docs/getting-started/saving-loading#version-control) afin de pouvoir annuler facilement une erreur.
:::

## Raccourcis clavier

**Déplacer la sélection vers le haut** - `Flèche vers le haut`
**Déplacer la sélection vers le bas** - `Flèche vers le bas`
**Ouvrir un dossier** - `Flèche vers la droite`
**Fermer un dossier** - `Flèche vers la gauche`
**Renommer** - `Entrée`
**Sélection multiple** (Uniquement pour les scènes) - `Maj` + Clic
