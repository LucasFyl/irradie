<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="Lucas Fayolle">
        <meta name="description" content="<?php echo $site->description()->html() ?>">
        <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>


        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="shortcut icon" href="/favicon.ico">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <!-- build:css(.tmp) styles/main.css -->
        <?php echo css('assets/styles/main.css') ?>
        <!-- endbuild -->

    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div id="loader"></div>
        <div id="super">
