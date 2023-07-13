# Enregistrement et chargement

## Enregistrer

Pour enregistrer votre projet, sélectionnez `Fichier > Enregistrer` dans le menu ou appuyez sur Ctrl/Cmd + S. Si vous essayez de fermer un projet avec des modifications non enregistrées, GB Studio vous avertira en vous donnant la possibilité d'enregistrer les modifications de votre projet. Sous macOS, toutes les modifications non enregistrées dans votre projet seront représentées par un point dans le bouton de fermeture de la fenêtre.

## Charger

Pour recharger votre projet, utilisez le bouton _Ouvrir_ de la fenêtre _Nouveau projet_ ou sélectionnez dans le menu `Fichier > Ouvrir` et accédez au dossier de votre projet, puis sélectionnez le fichier `.gbsproj`.

Vous pouvez également revenir à la fenêtre des _Projets Récents_ en sélectionnant dans le menu l'option `Fichier > Changer de projet`.

## Contrôle de version

La structure des dossiers et le fichier `.gbsproj` sont conçus pour bien fonctionner avec les systèmes de contrôle de version tels que [Git](https://git-scm.com/), chaque modification par l'application ayant lieu sur une nouvelle ligne dans le fichier de données, permettant de suivre facilement l'historique. Si vous souhaitez utiliser un système de contrôle de version sur votre projet, vous pouvez simplement créer le dépôt dans le dossier racine du projet.

Il est recommandé d'ignorer le dossier `build` de votre dépôt à l'aide d'un fichier `.gitignore` ou similaire.

## Sauvegardes

Chaque fois que vous enregistrez votre projet, la version précédente est enregistrée dans votre dossier de projet avec l'extension `.gbsproj.bak`. Si vous souhaitez revenir à la version précédente dans votre projet, vous pouvez renommer ce fichier en utilisant avec l'extension `.gbsproj` et ouvrir ce fichier à la place.