<?php snippet('head') ?>


  <div class="landing">
    <div class="top left">
      <p><?php echo $page->topleft()->html() ?></p>
    </div>
    <div class="top right">
      <p><?php echo $page->topright()->html() ?></p>
    </div>
    <div class="bottom left">
      <p><?php echo $page->bottomleft()->html() ?></p>
    </div>
    <div class="bottom right">
      <p><?php echo $page->bottomright()->html() ?></p>
    </div>

    <h1 class="logo">Irradié</h1>

    <div class="cover">
      <img src="assets/images/overlay-landing-home.svg" alt="#" draggable="false" />
      <img src="<?php echo $page->image('background.gif') ?>" alt="#" class="background" />
    </div>
  </div>


  <div id="main" class="main <?php echo $page->id() ?>">
    <?php snippet('header') ?>

    <?php snippet('projects'); ?>
  </div>

<?php snippet('footer') ?>
