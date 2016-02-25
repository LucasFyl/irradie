<?php snippet('head') ?>
  <div id="main" class="error project <?php echo $page->id() ?>" style="min-height: 100vh;">

    <?php snippet('header') ?>

    <div class="wrap">
      <div class="infos">
        <h1><?php echo $page->text()->kirbytext() ?></h1>
      </div>
    </div>
  </div>
<?php snippet('footer') ?>
