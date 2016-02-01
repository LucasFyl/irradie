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

    <div class="logo-wrap"><h1 class="logo">Irradié</h1></div>

    <div class="fixed-wrap">
      <div class="cover">
        <div class="background-wrap">
          <img width="470" height="659" class="glitch" />
        </div>
        <!-- <img src="/assets/images/placeholder-background.jpg" alt="#" class="background" /> -->
      </div>
    </div>

  </div>


  <div id="main" class="main <?php echo $page->id() ?>">
    <?php snippet('header') ?>

    <?php snippet('projects'); ?>
  </div>

<?php snippet('footer') ?>
