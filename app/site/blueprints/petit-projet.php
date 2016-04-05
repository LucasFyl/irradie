<?php if(!defined('KIRBY')) exit ?>

title: Petit Projet
pages: false
files:
  sortable: true
fields:
  title:
    label: Titre
    type:  text
  
  heading1: 
    type: headline
    label: Grid informations
    help: 1rem = 10px sur un écran 15" (1440px x 788px) 
  dataParallax:
    label: Vitesse du parallax
    type: select
    required: true
    default: medium
    options:
      slow: slow
      medium: medium
      fast: fast
    width: 1/3
  elWidth:
    label: Taille de l'élément (largeur)
    required: true
    width: 1/3
    type: select
    options:
      30: S
      47.5: M
      92: L
  elHeight:
    label: Format (hauteur)
    type: number
    required: true
    width: 1/3
    type: select
    options:
      43.3: S - portrait
      23.3: S - paysage
      67.5: M - portrait
      32.5: M - paysage
      54: L - paysage
  topPosition:
    label: Position "top" (en rem)
    type: input
    required: true
    width: 1/3
  leftPosition:
    label: Position "left" (en rem)
    type: input
    width: 1/3
  rightPosition:
    label: Position "right" (en rem)
    type: input
    width: 1/3

  heading2: 
    type: headline
    label: Project informations
  year:
    label: Année
    type: text
    width: 1/2
  client:
    label: Client
    type: text
    width: 1/2
  projectType1:
    label: Type de projet
    type: text
    default: Editorial
    width: 1/2
  projectType2:
    label: Type de projet
    type: text
    width: 1/2
  text:
    label: Texte 1 (entre photos 2 et 3)
    type:  textarea
