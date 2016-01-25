<?php snippet('head') ?>


  <div class="landing">
    <div class="top left">
      <p>Art</p>
    </div>
    <div class="top right">
      <p>Direction</p>
    </div>
    <div class="bottom left">
      <p>Graphic</p>
    </div>
    <div class="bottom right">
      <p>Design</p>
    </div>

    <h1 class="logo">Irradié</h1>

    <div class="cover">
      <img src="assets/images/overlay-landing-home.svg" alt="#" draggable="false" />
      <img src="<?php echo $page->image('background.gif') ?>" alt="#" class="background" />
    </div>
  </div>


  <div role="main" class="main <?php echo $page->id() ?>">
    <?php snippet('header') ?>

    <?php snippet('projects'); ?>
  </div>

<?php snippet('footer') ?>
