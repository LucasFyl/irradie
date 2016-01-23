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
  client:
      label: Client
      type: text
  projectType:
      label: Type de projet
      type: text
      default: Editorial
  text:
    label: Text 1 (entre photos 2 et 3)
    type:  textarea
  text2:
      label: Text 2 (entre photos 7 et 8)
      type: textarea
