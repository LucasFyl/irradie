<?php snippet('head') ?>

  <h1><?php echo $page->title() ?></h1>

  <?php foreach($page->images()->sortBy('asc') as $image): ?>
    <img src="<?php echo $image->url() ?>" alt="<?php echo $image->title() ?>" />
  <?php endforeach; ?>


<?php snippet('footer') ?>
