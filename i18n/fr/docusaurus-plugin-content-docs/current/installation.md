---
sidebar_position: 2
---

# Installation

Téléchargez votre version préférée depuis la [page de téléchargement Itch.io](https://chrismaltby.itch.io/gb-studio) ou utilisez [GitHub](https://github.com/chrismaltby/gb-studio/releases) pour les versions plus anciennes.

Parfois, des versions bêta peuvent également être trouvées sur [Patreon](https://www.patreon.com/gbstudiodev).

## Windows

Deux versions de GB Studio sont disponibles pour Windows. La version _Squirrel Installer_ nécessite simplement que vous la décompressiez, de double-cliquer et d'attendre quelques secondes pendant que l'application s'installe sur votre lecteur `C:\`. Une fois installée, un raccourci sera automatiquement ajouté à votre bureau et l'application démarrera. L'application sera installée dans `%LocalAppData%\gb_studio`, si vous devez l'installer à un emplacement différent, utilisez la version _Manual_.

La version _Manual_ est un dossier zip contenant les fichiers de l'application, vous pouvez le décompresser à n'importe quel endroit. Une fois décompressé, double-cliquez sur `gb-studio.exe` pour démarrer l'application.

## macOS

Pour macOS, téléchargez et décompressez le dossier et déplacez `GB Studio.app` dans votre dossier _Applications_. Double-cliquez pour démarrer l'application.

Deux versions de macOS sont disponibles : `Apple Silicon` et `Intel`. Pour des performances optimales, veuillez utiliser la version qui correspond au processeur de votre Mac. Si vous n'êtes pas sûr, essayez d'abord la version Apple Silicon, car elle sera nettement plus rapide si votre Mac la prend en charge.

Si vous rencontrez des difficultés durant la création ou lors de l'exécution de votre jeu, vous devrez peut-être installer les outils de ligne de commande d'Apple en ouvrant `Applications/Terminal.app` et en saisissant la commande ci-dessous.

```
xcode-select --install
```

## Ubuntu / Linux basé sur Debian

Pour les distributions Linux basées sur Debian, téléchargez la version .deb et exécutez les commandes ci-dessous (Testé sur Ubuntu 18.10).

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / Linux basé sur RPM

Pour les distributions Linux basées sur RPM, téléchargez la version .rpm et exécutez les commandes ci-dessous (Testé sur Fedora 29).

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```

## Dépannage

Si vous rencontrez des problèmes d'affichage sur Linux, ou si gb-studio refuse de démarrer, essayez d'exécuter GB Studio à l'aide de la commande ci-dessous.
```
> gb-studio --disable-gpu-sandbox
```