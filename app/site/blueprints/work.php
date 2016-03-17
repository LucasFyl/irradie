<?php if(!defined('KIRBY')) exit ?>

title: Work
pages:
  template:
    - project
    - petit-projet
files: false
fields:
  title:
    label: Title
    type:  text
  elHeight:
    label: Hauteur du container (en rem)
    type:  input
    help: minimum 470rem (4700px) pour les 18 projets de la v1 du site
  info:
    label: Info
    type: info
    text: >
      Chaque projet *doit* comprendre une image nommée **01-cover.jpg**.

      Celle-ci sera utilisée sur le page d'accueil et la page work comme thumbnail pour le projet.

      Les images suivantes (peut importe leur nom) apparaitront sur la page spécifique au projet. Elles *peuvent* être ordonnées.