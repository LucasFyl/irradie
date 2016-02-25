<?php if(!defined('KIRBY')) exit ?>

title: Petit Projet
pages: false
files:
  sortable: true
fields:
  title:
    label: Titre
    type:  text
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
