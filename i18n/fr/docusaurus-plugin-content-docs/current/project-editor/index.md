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

### Select tool

Clicking any scenes, actors, or triggers will update the _Editor Sidebar_ to show the properties and scripts for the item you selected. You can switch back to the Project's properties by clicking outside of a scene.

:::tip
If you hold `Shift` while clicking on scenes you can add and remove them from your selection. This allows you to drag multiple scenes together or right click to delete multiple at once. You can also hold `Shift` while dragging to create a box selection.

<img title="Scene box selection" src="/img/screenshots/multi-select.gif" width="320" className="drop-shadow" />

:::

### Add tool

You are given the choice of adding a new Actor, Trigger or Scene. After clicking any of the 3 options, your mouse cursor will be loaded with a new item. You can place the new item by clicking inside the Project Editor, and cancel the action by pressing Escape or selecting another tool from _Editor Tools_.

### Erase tool

All collisions, actors, and triggers will be removed when clicked. Erase actions can be undone by pressing `Ctrl / Cmd` + `Z`.

Scenes are not affected by _Erase mode_. To delete a scene either:
- Select the scene _Select mode_ then in the _Editor Sidebar_ click the down arrow at the top and choose the "Delete Scene" menu item.
- Select the scene and press the `Backspace` key on your keyboard.
- Right click on the scene and click "Delete Scene" from the menu.

### Collision tool

Allows you to [add collisions](/docs/project-editor/scenes#adding-collision-to-a-scene) to any type of scene using GB Studio's _Drawing mode_.

### Colorize tool

Allows you to [paint tiles](/docs/project-editor/scenes#colorizing-a-scene) in your scene with with up to 8 color palettes per scene. The _Colorize tool_ also uses GB Studio's _Drawing mode_. The palettes used here are determined in the _Palette_ tab in the _Project Editor_.

See the documentation on [Keyboard Shortcuts](/docs/getting-started/keyboard-shortcuts) for editor tool shortcuts.

## Project Views

Using the _Project View Button_ you can switch between different views of your project and its assets.

<img title="Scene box selection" src="/img/screenshots/project-view-btn.gif" width="320" className="drop-shadow" />

- **Game World:** Create your game by combining [scenes](/docs/project-editor/scenes), [actors](/docs/project-editor/actors) and [triggers](/docs/project-editor/triggers).

- **Sprites:** Edit your [sprites](/docs/assets/sprites) and [create animations](/docs/assets/sprites#sprite-editor).

- **Images:** Preview your [background](/docs/assets/backgrounds) and [tileset](/docs/assets/tilesets) assets.

- **Music:** Preview and edit your [music](/docs/assets/music) files.

- **Palettes:** Edit your palettes for color games.

- **Dialogue Review:** Preview and edit all the text in your game.

- **Settings:** Change your [project's settings](/docs/settings) such as default sprites, color palettes and keyboard controls.

See the documentation on [Assets](/docs/assets) for more information on how to add new assets.
