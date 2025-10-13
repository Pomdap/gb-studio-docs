---
sidebar_position: 4
---

# Editeur de projet

La vue par défaut de l’_Éditeur de projet_, comme indiqué ci-dessous, est le _Monde du jeu_. C’est ici que vous pouvez créer votre jeu en combinant des scènes, en ajoutant des acteurs et des déclencheurs, puis en scriptant des événements pour ajouter des interactions.

<img title="The Project Editor" src="/img/screenshots/project-editor-v3.png" width="1258" />

Utilisez les _Outils de l’éditeur_ pour basculer entre les modes Sélectionner, Ajouter, Gomme, Collisions et Coloriser.

Par défaut, les propriétés de votre projet sont affichées dans la _Barre latérale de l’éditeur_ à droite. Ici, vous pouvez définir le nom du projet et choisir la scène de départ. Cette vue de projet est également l’endroit où les valeurs initiales de l’acteur Joueur sont définies. Voir la page sur [le Joueur](/docs/project-editor/player) pour plus d’informations sur cet acteur.

Pour consulter à nouveau les propriétés du projet à partir de la _Barre latérale de l’éditeur_, cliquez sur n’importe quel espace vide entre les scènes.

## Outils de l’éditeur

### Outil de sélection

Cliquer sur une scène, un acteur ou un déclencheur mettra à jour la _Barre latérale de l’éditeur_ afin d’afficher les propriétés et les scripts de l’élément sélectionné. Vous pouvez revenir aux propriétés du projet en cliquant en dehors d’une scène.

:::tip
En maintenant la touche `Maj` enfoncée pendant que vous cliquez sur des scènes, vous pouvez les ajouter ou les retirer à votre sélection. Cela vous permet de déplacer plusieurs scènes en même temps ou de faire un clic droit pour les supprimer toutes d’un coup. Vous pouvez également maintenir `Maj` enfoncé tout en traçant un rectangle pour effectuer une sélection multiple.

<img title="Scene box selection" src="/img/screenshots/multi-select.gif" width="320" className="drop-shadow" />

:::

### Outil d’ajout

Vous pouvez ajouter un nouvel Acteur, un Déclencheur ou une Scène. Après avoir cliqué sur l’un de ces options, votre curseur vous servira à placer le nouvel objet. Cliquez dans l’Éditeur de projet pour le positionner, ou appuyez sur Échap pour annuler, ou encore sélectionnez un autre outil depuis les _Outils de l’éditeur_.

### Outil Gomme

Tous les éléments tels que les collisions, acteurs et déclencheurs seront supprimés lorsque vous cliquez dessus. Les actions d’effacement peuvent être annulées en appuyant sur les touches `Ctrl / Cmd` + `Z`.

Les scènes ne sont pas affectées par le mode _Gomme_. Vous pouvez supprimer une scène, de l’une de ces manières :

- Sélectionnez la scène en mode _Sélection_, puis dans la _Barre latérale de l’éditeur_, cliquez sur la flèche vers le bas en haut et cliquez sur "Supprimer la scène" dans le menu.
- Sélectionnez la scène et appuyez sur la touche `Retour arrière` de votre clavier.
- Faites un clic droit sur la scène et cliquez sur "Supprimer la scène" dans le menu.

### Outil de collision

Permet [d’ajouter des collisions](/docs/project-editor/scenes#adding-collision-to-a-scene) à n’importe quel type de scène en utilisant le mode _Dessin_ de GB Studio.

### Outil de colorisation

Permet de [peindre les tuiles](/docs/project-editor/scenes#colorizing-a-scene) de votre scène avec jusqu’à 8 palettes de couleurs différentes par scène. _L’outil de colorisation_ utilise également le mode _Dessin_ de GB Studio. Les palettes utilisées ici sont définies dans l’onglet _Palette_ de l’_Éditeur de projet_.

Consultez la page sur les [Raccourcis clavier](/docs/getting-started/keyboard-shortcuts) pour connaître les raccourcis associés aux outils de l’éditeur.

## Vues du projet

Le _Bouton de vue du projet_ vous permet de basculer entre différentes vues de votre projet et de ses ressources.

<img title="Bouton de vue du projet" src="/img/screenshots/project-view-btn.gif" width="320" className="drop-shadow" />

- **Monde du jeu :** Créez votre jeu en combinant des [scènes](/docs/project-editor/scenes), des [acteurs](/docs/project-editor/actors) et des [déclencheurs](/docs/project-editor/triggers).

- **Sprites :** Modifiez vos [sprites](/docs/assets/sprites) et créez des [animations](/docs/assets/sprites#sprite-editor).  

- **Images :** Prévisualisez vos [arrières-plans](/docs/assets/backgrounds) et vos [jeux de tuiles](/docs/assets/tilesets).  

- **Musique :** Écoutez et modifiez vos fichiers [musicaux](/docs/assets/music).

- **Palettes :** Éditez vos palettes de couleurs pour les jeux en couleur.

- **Dialogues :** Consultez et modifiez tous les textes de votre jeu.

- **Paramètres :** Modifiez les [paramètres du projet](/docs/settings), comme les sprites par défaut, les palettes de couleurs ou les contrôles clavier.

Consultez la section sur les [Ressources](/docs/assets) pour plus d’informations sur l’ajout de nouveaux éléments à votre projet.
