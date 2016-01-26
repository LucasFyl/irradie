<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
fields:
  title:
    label: Titre
    type:  text
  date:
    label: Année
    type: text
    width: 1/3
  client:
    label: Client
    type: text
    width: 1/3
  projectType:
    label: Type de projet
    type: text
    default: Editorial
    width: 1/3
  text:
    label: Texte 1 (entre photos 2 et 3)
    type:  textarea
  text2:
      label: Texte 2 (entre photos 7 et 8)
      type: textarea
