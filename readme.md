Plugin Speak pour S.A.R.A.H
================================

Ce plugin vous permet de mieux gérer les "?emulate" pour la V4 de S.A.R.A.H
Il remplace le traditionnel "http://127.0.0.1:8888/?emulate=Texte+a+emuler"

Il peut être aussi utilisé pour mon application android si vous souhaiter un retour audio sur le PC:
https://github.com/Pyozer/SARAH_Application

Prérequis
---------
- Sarah v4

Installation
------------
- Copier le dossier speak dans votre dossier "plugins" de Sarah
- Si vous avez changé le port par défaut (8888) du client, modifiez le .prop

Comment ça marche ?
-------------------
- Démarrez S.A.R.A.H (client et serveur)
- Il vous suffit ensuite de faire:
http://127.0.0.1:8080/sarah/speak?emulate=Jarvis+il+est+quelle+heure&notts=false

Les paramètres possibles
------------------------
- emulate = Le texte à émuler  (obligatoire)
- notts = true  ou  false  (facultatif)
Si notts=false alors le PC vous vocalisera la réponse sinon si notts=true alors il n'y aura pas cette vocalisation