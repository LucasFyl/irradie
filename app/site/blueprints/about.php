<?php if(!defined('KIRBY')) exit ?>

title: About
pages: true
files: true
fields:
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
  services:
    label: Services
    type:  textarea
    width: 1/4
    help:  sauter une ligne pour un retour à la ligne sur le site
  clients:
    label: Clients
    type:  textarea
    width: 1/4
    help:  sauter une ligne pour un retour à la ligne sur le site
  press:
    label: Selected online press
    type:  textarea
    width: 1/4
    help:  sauter une ligne pour un retour à la ligne sur le site
  award:
    label: Award
    type:  textarea
    width: 1/4
    help:  sauter une ligne pour un retour à la ligne sur le site
  secondText:
    label: Second text
    type:  textarea
    help: second paragraph, above the second gallery
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
