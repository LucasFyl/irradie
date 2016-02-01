<?php if(!defined('KIRBY')) exit ?>

title: About
pages: true
files: true
fields:
  General:
    label: General informations
    type: headline
  title:
    label: Title
    type:  text
  introText:
    label: Intro text
    type:  textarea
    help:  (bigger typo, top of the page)
  firstText:
    label: First text
    type:  textarea
    help: first paragraph, above the first gallery
  SCSOP:
    label: Services, Clients & Selected Online Press
    type: headline
  services:
    label: Services
    type:  textarea
    width: 1/2
    buttons:
      - link
      - email
  clients:
    label: Clients
    type:  textarea
    width: 1/2
    buttons:
      - link
      - email
  press:
    label: Selected online press
    type:  textarea
    width: 1/2
    buttons:
      - link
      - email
  award:
    label: Award
    type:  textarea
    width: 1/2
    buttons:
      - link
      - email
  Publications:
    label: Publications
    type: headline
  rowPublications1:
    label: Colonne 1
    type: textarea
    buttons: 
      - link
    width: 1/3
  rowPublications2:
    label: Colonne 2
    type: textarea
    buttons: 
      - link
    width: 1/3
  rowPublications3:
    label: Colonne 3
    type: textarea
    buttons: 
      - link
    width: 1/3
  Exhibitions:
    label: Exhibitions
    type: headline
  rowExhibitions1:
    label: Colonne 1
    type: textarea
    buttons: 
      - link
    width: 1/3
  rowExhibitions2:
    label: Colonne 2
    type: textarea
    buttons: 
      - link
    width: 1/3
  rowExhibitions3:
    label: Colonne 3
    type: textarea
    buttons: 
      - link
    width: 1/3
  secondText:
    label: Second text
    type:  textarea
    help: second paragraph, above the second gallery
  contact:
    label: Contact / Social informations
    type: headline
  contactInfos:
    label: Contact informations
    type: textarea
    width: 1/2
  contactExtras:
    label: Contact us - extra informations
    type: textarea
    width: 1/2
  socialMedia:
    label: Social networks
    type: textarea
    width: 1/2
  newsletter:
    label: Newsletter text
    type: textarea
    default: Subscribe to our newsletter
    width: 1/2
