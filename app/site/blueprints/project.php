<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
  caption:
    label: Size
    type: text
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
    label: largeur de l'element (en rem)
    type: input
    required: true
    width: 1/3
  elHeight:
    label: hauteur de l'element (en rem)
    type: input
    required: true
    width: 1/3
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
  text2:
      label: Texte 2 (entre photos 7 et 8)
      type: textarea
